# Industryal-API
Node_version: 14.17.2 \
# Instruction
To install all packages, run command: 
###### npm install
# Description
This project will handle a system that manages and tracks the procedure of turning raw 
materials into purchasable or sellable products. There will be users who will handle different 
sectors of the system, namely – HR, Sales and Marketing, Finance and Accounting and Products. 
There will be one SuperAdmin user who will be able to access all the features provided in the 
system, including adding new users.

Five types of users:
1) SuperAdmin
2) Users
    a) Product Manager
    b) Sales and Marketing Manager
    c) Human Resources Manager
    d) Finance and Accounting Manager
    
Common Features for All Users:
  1. Log in to/Log out of the system
  2. Reset password for account
  3. Chatting with other employees
  4. Notices

SuperAdmin user Functionality: 
  1. Perform all CRUD operations
  2. Post notices

Product Manager Functionality:
  1. Add Product
  2. Product List
  3. Faulty Product List
  4. Search Product
  5. Product Statistics
  6. Product Stocks
  7. Create Warehouse
  8. Warehouse List
  9. Search Warehouse
  10. Transfer Product
  11. Show warehouse Statistics
  12. Export List/Statistics
  13. Request for leave
  14. Activity List
  15. Contact Administration

Sales and Marketing Manager Functionality:
  1. Access Customer Database (View) 
  2. Access Product Database (View)
  3. Manipulate Sales Database (CRUD)
  4. Receiving Finalized Orders
  5. Limiting orders after payment
  6. Cancellation of orders
  7. Setting all the sales values
  8. Displaying profit generated from sales
  9. Search for Customers
  10. Search for Products
  11. Search for Order
  12. Manipulate Orders Database (CRUD)
  13. Send mass emails to customers regarding offers
  14. Apply for Leave which will be handled by HR
  15. Export sales figures as document and download

Human Resources Manager Functionality: 
  1. Create users
  2. Search users
  3. Create employee
  4. Create Group
  5. Add employee to group
  6. request for leave
  7. Accept or Cancel leave request
  8. Rostering
  9. Create expense reports
  10. List of expense reports
  11. Viewing expense report statistic
  12. Export employee statistics 
  13. Payroll

Finance and Accounting Manager Functionality:
  1. Create Customer Invoice
  2. Create Supplier Invoice
  3. Send Invoice Via Email
  4. Generate Customer/Supplier Invoice Stats
  5. Handle Customer Payments
  6. Handle Supplier Payments
  7. Accounting (Calculations)
  8. Reuse Invoice Data in Accounting
  9. Generate Financial Reports
  10. Manage Bank Accounts
  11. Generate Stats from Financial Records
  12. Import/Export Records
  13. Apply for leave request
  14. Budgeting
  15. Export financial statements as document
