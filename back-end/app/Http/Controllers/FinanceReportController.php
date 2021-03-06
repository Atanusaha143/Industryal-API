<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Finance\Report;
use App\Models\Finance\Asset;
use App\Models\Finance\Liability;
use App\Models\Finance\Expense;
use App\Models\Finance\Invoice;
use Carbon\Carbon;
use PDF;
use File;

class FinanceReportController extends Controller
{
    public function index_invoice($id){
        $reports = Report::where('manager_id',$id)->where('type','Invoice')->get();
        if($reports){
            return response()->json($reports, 200);
        }
        $error = array("error"=>"Not Found","code"=>"404");
        return response()->json($error, 404);
    }
    public function index_financial($id){
        $reports = Report::where('manager_id',$id)->where('type','Financial')->get();
        if($reports){
            return response()->json($reports, 200);
        }
        $error = array("error"=>"Not Found","code"=>"404");
        return response()->json($error, 404);
    }

    public function invoice($id){
        //Weekly
        $date = Carbon::now()->subDays(7);
        $supplier_invoice_weekly = Invoice::where('created_at', '>=', $date)->where('manager_id',$id)
        ->where('type','Supplier')
        ->count();
        $customer_invoice_weekly = Invoice::where('created_at', '>=', $date)->where('manager_id',$id)
        ->where('type','Customer')
        ->count();
        //Monthly
        $date = Carbon::now()->subDays(30);
        $supplier_invoice_monthly = Invoice::where('created_at', '>=', $date)->where('manager_id',$id)
        ->where('type','Supplier')
        ->count();
        $customer_invoice_monthly = Invoice::where('created_at', '>=', $date)->where('manager_id',$id)
        ->where('type','Customer')
        ->count();

        $weekly_name = uniqid() . '_WEEKLY_INVOICE.pdf';
        $weekly = PDF::loadView('finance.reports.weeklyinvoice', array('supplier_invoice_weekly' => $supplier_invoice_weekly,'customer_invoice_weekly' => $customer_invoice_weekly));
        File::put(public_path('upload/Finance/Report/'.$weekly_name), $weekly->output());

        $monthly_name = uniqid() . '_MONTHLY_INVOICE.pdf';
        $monthly = PDF::loadView('finance.reports.monthlyinvoice', array('supplier_invoice_monthly' => $supplier_invoice_monthly,'customer_invoice_monthly' => $customer_invoice_monthly));
        File::put(public_path('upload/Finance/Report/'.$monthly_name), $monthly->output());

        $report = new Report;
        $report->type = 'Invoice';
        $report->weekly = $weekly_name;
        $report->monthly = $monthly_name;
        $report->manager_id = $id;
        $report->save();
        $success = array("success"=>"Invoice Report Generated","code"=>"200");
        return response()->json($success, 200);
    }
    public function financial($id){
        //Weekly
        $date = Carbon::now()->subDays(7);
        $asset_weekly = Asset::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();
        $expense_weekly = Expense::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();
        $liability_weekly = Liability::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();
        //Monthly
        $date = Carbon::now()->subDays(30);
        $asset_monthly = Asset::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();
        $expense_monthly = Expense::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();
        $liability_monthly = Liability::where('created_at', '>=', $date)
        ->selectRaw("SUM(amount) as amount")
        ->groupBy('type')
        ->get();

        $weekly_name = uniqid() . '_WEEKLY_FINANCIAL.pdf';
        $weekly = PDF::loadView('finance.reports.weeklyfinancial', array('asset_weekly' => $asset_weekly,'liability_weekly' => $liability_weekly,'expense_weekly' => $expense_weekly));
        File::put(public_path('upload/Finance/Report/'.$weekly_name), $weekly->output());

        $monthly_name = uniqid() . '_MONTHLY_FINANCIAL.pdf';
        $monthly = PDF::loadView('finance.reports.monthlyfinancial', array('asset_monthly' => $asset_monthly,'liability_monthly' => $liability_monthly,'expense_monthly' => $expense_monthly));
        File::put(public_path('upload/Finance/Report/'.$monthly_name), $monthly->output());

        $report = new Report;
        $report->type = 'Financial';
        $report->weekly = $weekly_name;
        $report->monthly = $monthly_name;
        $report->manager_id = $id;
        $report->save();
        $success = array("success"=>"Financial Report Generated","code"=>"200");
        return response()->json($success, 200);
    }
}
