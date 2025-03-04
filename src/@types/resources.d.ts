interface Resources {
  translation: {
    toastCommon: {};
    intlCurrencyWithOptions: '{{val, currency(currency: USD)}}';
    intlDateTime: 'On the {{val, datetime}}';
    dateFormat: 'MMMM d, yyyy';
    timeFormat: 'h:mm a';
    message: {
      notFoundTitle: 'Page not found!';
      deletedItemNotification: 'Recently dishes deleted';
      notFoundContent: 'Sorry, the page you are looking for does not exist.';
      forbiddenTitle: 'Forbidden!';
      forbiddenContent: "Sorry, you don't have permission to access this page.";
      emptyData: 'No data available!';
      emptyFood: 'No food available!';
      emptyBranch: 'No branch available!';
      emptyEmployee: 'No employee available!';
      emptyMenu: 'No menu available!';
      error: 'An error occurred';
      success: 'Successful operation';
      warning: 'Warning';
      info: 'Information';
      empty_table_name: 'Table name is required';
      table_status: 'Table status';
      table_status_empty: 'Empty';
      table_status_occupied: 'Reserved';
      table_status_served: 'Served';
      table_status_checkout: 'Checked out';
      table_status_cancel: 'Cancelled';
      table_status_pending: 'Processing';
      table_confirm_delete: 'Delete table {{name}}?';
      table_please_input: 'Enter table name...';
      add_table: 'Add table';
      order: 'Order';
      order_success: 'Order successful';
      order_fail: 'Order failed';
      order_pending: 'Processing order {{id}}';
      order_cancel: 'Cancel order {{id}}?';
      order_cancel_success: 'Order cancellation successful';
      order_cancel_fail: 'Order cancellation failed';
      order_status: 'Order status';
      order_status_success: 'Order confirmed';
      order_status_fail: 'Order not confirmed';
      order_status_pending: 'Order awaiting confirmation';
      order_status_cancel: 'Order {{id}} has been cancelled';
    };
    routes: {
      home: 'Home';
      tableManager: 'Table Manager';
      employeeManager: 'Employee Manager';
      branchManager: 'Branch Manager';
      revenueManager: 'Revenue Manager';
      menuManager: 'Menu Manager';
    };
    shared: {
      login: 'Login';
      signup: 'Sign up';
      logout: 'Logout';
      delete: 'Delete';
      confirm: 'Confirm';
      cancel: 'Cancel';
      close: 'Close';
      loading: 'Loading...';
      save: 'Save';
      add: 'Add';
      create: 'Create';
      update: 'Update';
      edit: 'Edit';
      back: 'Back';
      detail: 'Detail';
      description: 'Description';
      status: 'Status';
      action: 'Action';
      search: 'Search';
      reset: 'Reset';
      filter: 'Filter';
      view: 'View';
      yes: 'Yes';
      no: 'No';
      all: 'All';
      submit: 'Submit';
      refresh: 'Refresh';
      menu: 'Menu';
      category: 'Category';
      price: 'Price';
      dish: 'Dish';
      count_dish: '{{count}} Dish';
      image: 'Image';
      branch: 'Branch';
      type: 'Type';
      address: 'Address';
      phone: 'Phone Number';
      discount: 'Discount';
      quantity: 'Quantity';
      total: 'Total';
      note: 'Note';
      close_menu: 'Close menu';
      open_menu: 'Open menu';
      add_to_cart: 'Add to cart';
      remove_from_cart: 'Remove from cart';
      view_cart: 'View cart';
      checkout: 'Checkout';
      empty_cart: 'Empty cart';
      cart: 'Cart';
      currentTable: 'Current table: {{tableName}}';
      table_name: 'Table {{tableName}}';
      createdAt: 'Created at {{time}}';
      updatedAt: 'Updated at {{time}}';
      dish_count: 'number of dishes: ({{dishesCount}})';
      total_price: 'Total price: {{totalPrice}}';
      empty_table: 'Empty table';
      occupied_table: 'Occupied table';
      served: 'Served';
      time: 'Time Update';
    };
    user: {
      username: 'Username';
      password: 'Password';
      fullname: 'Fullname';
      email: 'Email';
      status: {
        title: 'Status';
        active: 'Active';
        inactive: 'Inactive';
      };
      role: {
        title: 'Role';
        chef: 'Chef';
        employee: 'Employee';
      };
    };
    LanguageSwitch: {
      title: 'Choose your language';
      en: 'English';
      vi: 'Vietnamese';
    };
    landingPage: {
      welcome: 'Welcome to Gloria system';
      description: 'Digital menu system helps you manage menus easily';
      button: 'Get started';
    };
    login: {
      title: 'Login';
      button: 'Login';
      forgot: 'Forgot password?';
      signup: 'Sign up';
      error: {};
      success: {};
      warnning: {};
    };
    signup: {
      title: 'Sign up';
      button: 'Sign-up';
      login: 'Login';
      chooseRole: 'Choose your role';
      chooseBranch: 'Choose your branch';
      error: {};
      success: {};
      warnning: {};
    };
    adminPage: {
      header: {
        headerDashboadMobile: {
          dashboard: 'Dashboard';
          notifications: 'Notifications';
          settings: 'Settings';
          search: 'Search';
        };
      };
      dashboard: {
        stats: {
          billTitle: 'Number of Bills Created';
          billDesc: 'February - July';
          employeeTitle: 'Number of Employees';
          employeeDesc: 'Increase ↗ 400 (22%)';
          revenueTitle: 'Revenue';
          revenueDesc: 'Increase ↘︎ 90 (14%)';
          branchTitle: 'Branches';
          branchDesc: 'Increase ↘︎ 90 (14%)';
        };
        tableBill: {
          latestBill: 'Latest Bills';
          serialNumber: 'Serial Number';
          branch: 'Branch';
          quantity: 'Quantity';
          totalAmount: 'Total Amount';
          date: 'Date';
          status: 'Status';
          placed: 'Placed';
          cancelled: 'Cancelled';
          placing: 'Placing';
        };
        chartsDashboard: {
          areChart: {
            chartTitle: 'Bill statistics table by month';
          };
          pieChart: {
            chartTitle: 'Customer statistics table by month';
          };
          composedChart: {
            chartTitle: 'Customer statistics table by month';
          };
        };
      };
      branchesManagerment: {
        mainBranch: {
          selectBranch: 'Select Branch';
          chooseBranch: 'Choose branch';
          prevPage: 'Previous Page';
          nextPage: 'Next Page';
          tableBranch: {
            serialNumber: 'Serial Number';
            branch: 'Branch';
            email: 'Email';
            phoneNumber: 'Phone Number';
            openingClosingHours: 'Opening - Closing Hours';
            status: 'Status';
            view: 'View';
            update: 'Update';
          };
        };
        branchDetails: {
          backButton: 'Back';
          branch: 'Branch';
          openingClosingHours: 'Opening - Closing Hours';
          menu: 'Menu';
          noMenu: 'There are no menus';
          address: 'Address';
          email: 'Email';
          phoneNumber: 'Phone Number';
          creator: 'Branch Creator';
          anonymous: 'anonymus';
          loading: 'loading...';
          chartsBranchDetails: {
            chartTitle: 'Monthly Revenue Statistics Table';
          };
          statusBranch: {
            orderStatus: 'Order Status';
            tableNumber: 'Table Number';
            totalItems: 'Total Items';
            totalPrice: 'Total Price';
            employeeName: 'Employee Name';
            status: 'Status';
            success: 'Success';
          };
          recentActiveBranch: {
            recentActivity: 'Recent Activity';
            billCreated: '1 Bill created';
            tableNumber: 'Table';
            revenueIncreased: 'Revenue increased';
          };
        };
        postBranch: {
          title: 'Create Branch';
          placeholderName: 'example: Branch 22';
          placeholderAddress: 'example: 21 Quang Trung, Go Vap, HCMC';
          placeholderEmail: 'example: example@gmail.com';
          placeholderPhoneNumber: 'example: 012345678';
          placeholderOpen: 'example: 8';
          placeholderClose: 'example: 22';
          selectMenu: 'Select Menu';
          common: {
            save: 'Add branch';
            name: 'Name';
            address: 'Address';
            email: 'Email';
            phone_number: 'Phone Number';
            open: 'Open time';
            close: 'End time';
            menu: 'Select Menu';
            error: 'An error occurred, please re-enter the correct data!';
            success: 'The branch has been created successfully!';
          };
          errorMessage: {
            name: 'Branch name must be at least 6 characters long';
            maxName: 'Branch name cannot exceed 100 characters';
            address: 'Address must be at least 6 characters long';
            email: 'Invalid email format';
            phone_number: 'Phone number must be between 10 and 15 characters';
            open: 'Opening time cannot be empty and must be a number';
            close: 'Closing time cannot be empty and must be a number';
            menu_id: "You haven't selected a menu";
          };
        };
        updateBranch: {
          title: 'Update Branch';
          save: 'Update branch';
          saving: 'Updating branch...';
          error: 'An error occurred while updating the branch';
          success: 'The branch has been updated successfully';
          notFound: 'Branch ID does not exist';
        };
      };
      employeesManagerment: {
        mainEmployees: {
          userDropdownPlaceholder: 'User Account';
          userDropdownLabel: 'User Account';
          roleDropdownPlaceholder: 'Role';
          roleOptionEmployee: 'Employee';
          roleOptionKitchen: 'Kitchen Staff';
          pendingUsersLink: 'Pending Approvals: ';
          loading: 'Loading...';
          tableEmployees: {
            tableHeader: {
              stt: 'STT';
              fullname: 'Full Name';
              role: 'Role';
              email: 'Email';
              phone: 'Phone';
              accountStatus: 'Account Status';
              action: 'Action';
            };
            actionButtons: {
              view: 'View';
              delete: 'Delete';
            };
            notify: {
              success: 'Successfully deleted employee';
              error: 'Successfully deleted employee';
            };
            pagination: {
              prevPage: 'Previous Page';
              nextPage: 'Next Page';
            };
            modal: {
              title: 'Delete Employee';
              description: 'Employee will be deleted permanently. Are you sure?';
              confirmButton: 'Confirm';
              cancelButton: 'Cancel';
            };
            employeeStatus: {
              inactive: 'Inactive';
              active: 'Active';
            };
          };
        };
        employeeDetails: {
          back: 'Back';
          update: 'Update';
          loadingError: 'Error loading data...';
          dataLoadingFailed: 'Failed to load data...';
          at: 'at';
          username: 'Username';
          fullname: 'Full Name';
          email: 'Email';
          phone: 'Phone';
          status: 'Account Status';
          inactiveAccount: 'Inactive Account';
          activeAccount: 'Active Account';
          role: 'Role';
          branch: 'Branch';
          loading: 'Loading';
          noData: 'No data available';
          createdAt: 'Created at';
          updatedAt: 'Updated at';
        };
        updateEmployee: {
          updateAccount: 'Update Account';
          username: 'Username';
          fullname: 'Full Name';
          email: 'Email';
          phone: 'Phone';
          role: 'Role';
          branch: 'Branch';
          employee: 'Employee';
          chef: 'Chef';
          updating: 'Updating...';
          updateEmployee: 'Update Employee';
          updateError: 'Error updating employee';
          updateSuccess: 'Employee updated successfully';
          idNotExist: 'Employee ID does not exist';
        };
        postEmployee: {
          minUsername: 'Username must be at least 6 characters';
          maxUsername: 'Username cannot exceed 100 characters';
          minFullname: 'Fullname must be at least 6 characters';
          maxFullname: 'Fullname cannot exceed 100 characters';
          invalidEmail: 'Invalid email address';
          minPassword: 'Password must be at least 6 characters';
          maxPassword: 'Password cannot exceed 100 characters';
          minPhone: 'Phone number must be at least 10 characters';
          maxPhone: 'Phone number cannot exceed 15 characters';
          requiredRole: 'Role cannot be empty';
          requiredBranch: 'Branch cannot be empty';
          createEmployee: 'Create Employee';
          username: 'Username';
          fullname: 'Fullname';
          email: 'Email';
          password: 'Password';
          phone: 'Phone';
          role: 'Role';
          branch: 'Branch';
          selectRole: 'Select role';
          selectBranch: 'Select branch';
          chef: 'Chef';
          employee: 'Employee';
          addEmployee: 'Add Employee';
          error: 'Error';
          unknownError: 'An unknown error occurred';
          genericError: 'An error occurred, please enter the data correctly!';
          employeeCreated: 'Employee created successfully!';
          placeholder: {
            usernamePlaceholder: 'e.g. john_doe';
            fullnamePlaceholder: 'e.g. John Doe';
            emailPlaceholder: 'e.g. john.doe@example.com';
            passwordPlaceholder: 'e.g. password123';
            phonePlaceholder: 'e.g. 0123456789';
          };
        };
      };
      requestEmployees: {
        dashboard: 'Dashboard';
        pending_users: 'Pending Users';
        back: 'Back';
        employee_name: 'Employee Name';
        position: 'Position';
        email: 'Email';
        phone: 'Phone';
        action: 'Action';
        no_pending_users: 'No pending users to activate';
        error: {
          approve_user: 'An error occurred while approving the user!!!';
        };
        success: {
          approve_user: 'Successfully approved employee!!!';
          approving: 'Approving...';
          approve: 'Approve';
        };
      };
      revenueManagerment: {
        revenueTitle: 'Total Revenue';
        branch: 'Branch:';
        hcmc: 'Ho Chi Minh City';
        selectBranch: 'Branch';
        year: 'Year';
        selectYear: 'Year';
        revenueIncrease: '12%';
        chartData: 'Chart Data';
      };
      menuManagement: {
        mainMenu: {
          numericalOrder: 'Serial Number';
          menuName: 'Menu Name';
          creator: 'Created By';
          innitiatedDate: 'Created At';
          action: 'Action';
          button: {
            detail: 'Detail';
            update: 'Update';
            delete: 'Delete';
          };
          modal: {
            addMenu: 'Create menu';
            updateMenu: 'Update menu';
            menuName: 'Menu name';
            image: 'Image';
            error: {
              valid_menuName: 'Please enter the menu name!!!';
              valid_menuImg: 'Please upload an image!!!';
            };
            btnSubmit: 'Submit';
          };
        };
        menuDetail: {
          numericalOrder: 'Serial Number';
          foodImage: 'Image';
          foodName: 'Name';
          description: 'Description';
          price: 'Price';
          category: 'Category';
          action: 'Action';
          error: {
            empty: 'The menu is currently empty.';
          };
          button: {
            update: 'Update';
            delete: 'Delete';
          };
          modal: {
            addFood: 'Create item';
            updateMenu: 'Update item';
            foodCategory: 'Category';
            foodName: 'Name';
            price: 'Price';
            description: 'Description';
            image: 'Image';
            error: {
              valid_category: 'Please enter the category!!!';
              valid_foodName: 'Please enter the dish name!!!';
              valid_foodPrice: 'Please enter the price!!!';
              valid_foodDescription: 'Please enter the description!!!';
              valid_foodDesLength: 'Description must be at least 10 characters long!!!';
              valid_foodImg: 'Please upload an image!!!';
            };
            btnSubmit: 'Submit';
          };
        };
      };
    };
    orderPage: {
      customerDashboard: {
        search_placeholder: 'Search foods...';
        menu_title: 'Food Menu';
        call_order_button: 'Order now';
        discount_program_title: 'Discount Program on Saturdays and Sundays';
        discount_program_description: "Come to Gloria, where you can order food at attractive prices compared to the places you've been to, because we prioritize both price and quality.";
        no_menus_available: 'No menus available!';
      };
      cartOders: {
        cart_title: 'Shopping Cart';
        cart_item_count: 'items';
        total_amount: 'Total';
        confirm_button: 'Confirm';
        cart_my_dishes: 'My dishes';
        delete_cart: 'Delete';
        success_message: 'Order placed successfully!!!';
        create_bill_error: 'An error occurred while creating the bill, please try again later!';
        error_message: 'Not dish found, please add foods and try again!';
        table_name: 'Table';
        update: 'Update quantity successfully!!!';
        not_open: 'not yet opened, please open and continue ordering!';
      };
      updateCart: {
        description: 'Description';
        notes: 'Notes';
        update_cart: 'Update';
        example_placeholder: "example: you don't eat spicy food...";
      };
      productDetails: {
        home: 'Home';
        search_placeholder: 'Search products...';
        add_to_cart: 'Add to cart';
        add_to_cart_success: 'Successfully added item to cart!!';
        price: 'Price';
        description: 'Description';
        minutes: 'minutes';
        rating: 'rating';
      };
    };
    employeeMenuManager: {
      title: 'Menu Manager';
      createNewMenu: 'Create New Menu';
      noBranchAccount: 'No branch account, please create a branch account first';
    };
    employeeDashboard: {
      title: 'Dashboard';
      newOrder: 'There is a new order at table {{tableName}} with {{orderCount}} dishes';
      newOrdersChef: 'Just updated the dish {{newFoods}} with quantity  {{quantityFoods}}';
      open_table: 'Open table';
      change_table: 'Change table';
      duplicateId: 'The current table and the new table must be different.';
      not_full_fied: 'Please select both current and new tables.';
      select_table_please: 'Select the table you want to move to';
      select_table: 'Select table';
    };
    employeeTableManager: {
      title: 'Table Manager';
      all: 'All ({{count}})';
      active: 'Serving ({{count}})';
      empty: 'Empty ({{count}})';
      add_new_table: 'Add new table';
      availabelTable: 'Available tables: ({{count}})';
    };
    BillPages: {
      table_bill: 'Table bill';
      fetch_error: 'An error occurred while fetching data';
      update: 'Update';
      delete: 'Delete';
      total_amount: 'Total amount';
      add_new_item: 'Add new item';
      edit_note: 'Edit notes';
      quantity: 'Quantity';
      food_name: 'Food Name';
      info: 'Info Status';
      status: 'Status';
      making: 'Making...';
      UpdateBillSuccess: 'Updated successfully: {{foodName}}';
      UpdateBillUnknownError: 'Failed to update bill detail: Unknown error';
      UpdateBillError: 'Failed to update bill detail: {{errorMessage}}';
      MissingRequiredFields: "Missing required fields '_id', 'branchId', or 'tableName'";
      DeleteBillSuccess: 'Successfully deleted: {{foodName}}';
      DeleteBillUnknownError: 'Unknown error deleting bill';
      DeleteBillError: 'Error deleting bill: {{errorMessage}}';
      DeleteBillStatusError: "The item's status is incorrect so it cannot be deleted";
      CanUpdate: 'You can only update orders with status ORDERED';
      ItemNotFound: 'Old quantity not found';
    };
    modalAddMenuDetail: {
      add: 'Add';
      adding: 'Adding...';
      edit: 'Edit';
      editing: 'Editing...';
      add_menu: 'Add Menu';
      edit_menu: 'Edit Menu';
      type: 'Type';
      food_name: 'Food Name';
      price: 'Price';
      description: 'Description';
      image: 'Image';
    };
    modalDelete: {
      confirm_delete: 'Confirm';
      cancel: 'Close';
      delete_product: 'Delete Product';
      deleting_product: 'Deleting Product...';
      confirm_delete_message: 'Confirm to delete this product!';
    };
    ChefPages: {
      title: 'Chef Dashboard';
      employeeDashboard: {
        newOrdersChef: 'New order: {{newFoods}} (quantity: {{quantityFoods}})';
      };
      chefDetail: {
        table_name: 'Table {{id}}';
        statusUpdateSuccess: 'Status updated successfully!';
        statusUpdateError: 'An error occurred while updating the status.';
        tableNotFound: 'Table not found.';
        noNote: 'Not Notes';
        ordered: 'Ordered';
        preparing: 'Preparing';
        served: 'Served';
        confirm: 'Confirm';
        complete: 'Complete';
        total_table: 'Total Table';
        create_table: 'Table had created';
        not_create_table: "Table haven't date created";
      };
    };
  };
}

export default Resources;
