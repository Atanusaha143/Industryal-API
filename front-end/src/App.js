import "./components/product-manager/assets/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/product-manager/home/Home";
import Login from "./components/common/Signin";
import Signout from './components/common/Signout';
import FinanceDashboard from './components/finance/FinanceDashboard';
import FinanceCustomerInvoice from './components/finance/invoice/FinanceCustomerInvoice';
import FinanceSupplierInvoice from './components/finance/invoice/FinanceSupplierInvoice';
import FinanceNewCustomer from './components/finance/invoice/FinanceNewCustomer';
import FinanceNewSupplier from './components/finance/invoice/FinanceNewSupplier';
import FinancePaymentHistory from './components/finance/payment/FinancePaymentHistory';
import FinanceCustomerPayment from './components/finance/payment/FinanceCustomerPayment';
import FinanceSupplierPayment from './components/finance/payment/FinanceSupplierPayment';
import FinanceFinancialReport from './components/finance/report/FinanceFinancialReport';
import FinanceInvoiceReport from './components/finance/report/FinanceInvoiceReport';
import FinanceLeave from './components/finance/leave/FinanceLeave';
import FinanceNewLeave from './components/finance/leave/FinanceNewLeave';
import FinanceImportHistory from './components/finance/import/FinanceImportHistory';
import FinanceExport from './components/finance/import/FinanceExport';
import FinanceImport from './components/finance/import/FinanceImport';
import FinanceConnectedBank from './components/finance/budgeting/FinanceConnectedBank';
import FinanceNewBank from './components/finance/budgeting/FinanceNewBank';
import FinanceExpense from './components/finance/budgeting/FinanceExpense';
import FinanceAsset from './components/finance/budgeting/FinanceAsset';
import FinanceLiability from './components/finance/budgeting/FinanceLiability';
import FinanceProfile from './components/finance/profile/FinanceProfile';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          {/* Product */}
          <Route exact path="/product">
            <Home title="dashboard" nav="common" />
          </Route>
          <Route exact path="/product/create">
            <Home title="add-product" nav="common" />
          </Route>
          <Route exact path="/product/list">
            <Home title="product-list" nav="common" />
          </Route>
          <Route exact path="/product/edit/:id">
            <Home title="product-edit" nav="common" />
          </Route>
          <Route exact path="/product/list/faulty">
            <Home title="faulty-product-list" nav="common" />
          </Route>
          <Route exact path="/product/stocks">
            <Home title="product-stocks" nav="common" />
          </Route>
          <Route exact path="/product/transfer">
            <Home title="product-transfer" nav="common" />
          </Route>
          <Route exact path="/product/statistics">
            <Home title="product-chart" nav="common" />
          </Route>
          <Route exact path="/product/compare">
            <Home title="product-compare" nav="common" />
          </Route>

          {/* Warehouse */}
          <Route exact path="/warehouse/create">
            <Home title="add-warehouse" nav="common" />
          </Route>
          <Route exact path="/warehouse/list">
            <Home title="warehouse-list" nav="common" />
          </Route>
          <Route exact path="/warehouse/edit/:id">
            <Home title="warehouse-edit" nav="common" />
          </Route>
          <Route exact path="/warehouse/statistics">
            <Home title="warehouse-chart" nav="common" />
          </Route>

          {/* Other */}
          <Route exact path="/product/user/leave">
            <Home title="user-leave" nav="common" />
          </Route>
          <Route exact path="/product/user/leave/myrequest">
            <Home title="user-myLeave" nav="common" />
          </Route>
          <Route exact path="/product/user/activities">
            <Home title="user-activities" nav="common" />
          </Route>
          <Route exact path="/product/user/administration">
            <Home title="administration" nav="common" />
          </Route>
          <Route exact path="/product/user/administration/myissue">
            <Home title="administration-myIssues" nav="common" />
          </Route>
          <Route exact path="/product/map">
            <Home title="google-map" nav="common" />
          </Route>

          {/* User */}
          <Route exact path="/product/user/profile">
            <Home title="profile" nav="profile" />
          </Route>
          <Route exact path="/product/user/edit">
            <Home title="profile-edit" nav="profile" />
          </Route>
          <Route exact path="/product/user/edit/profilepicture">
            <Home title="profile-picture-edit" nav="profile" />
          </Route>
          <Route exact path="/product/user/edit/changePassword">
            <Home title="profile-change-password" nav="profile" />
          </Route>
          <Route exact path="/product/user/edit/changePassword/verify">
            <Home title="profile-change-password-verify" nav="profile" />
          </Route>
          {/*FINANCE*/}
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/financedashboard" component={FinanceDashboard} />
          <Route exact path="/financecustomerinvoice" component={FinanceCustomerInvoice} />
          <Route exact path="/financesupplierinvoice" component={FinanceSupplierInvoice} />
          <Route exact path="/financenewcustomerinvoice" component={FinanceNewCustomer} />
          <Route exact path="/financenewsupplierinvoice" component={FinanceNewSupplier} />
          
          <Route exact path="/financepaymenthistory" component={FinancePaymentHistory} />
          <Route exact path="/financecustomerpayment" component={FinanceCustomerPayment} />
          <Route exact path="/financesupplierpayment" component={FinanceSupplierPayment} />

          <Route exact path="/financefinancialreport" component={FinanceFinancialReport} />
          <Route exact path="/financeinvoicereport" component={FinanceInvoiceReport} />

          <Route exact path="/financeleave" component={FinanceLeave} />
          <Route exact path="/financenewleave" component={FinanceNewLeave} />

          <Route exact path="/financeimporthistory" component={FinanceImportHistory} />
          <Route exact path="/financeexport" component={FinanceExport} />
          <Route exact path="/financeimport" component={FinanceImport} />

          <Route exact path="/financebanks" component={FinanceConnectedBank} />
          <Route exact path="/financenewbank" component={FinanceNewBank} />
          <Route exact path="/financexpense" component={FinanceExpense} />
          <Route exact path="/financeasset" component={FinanceAsset} />
          <Route exact path="/financeliability" component={FinanceLiability} />

          <Route exact path="/financeprofile" component={FinanceProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
