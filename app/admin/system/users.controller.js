app.controller('UsersCtrl', ['Users', '$state', '$scope',
  function (                  Users,   $state,   $scope) {
    var usersCtrl = this;

    usersCtrl.editUser = function(row) {
      $state.go('admin.system.user', {'rowEntity': row.entity});
    };

    usersCtrl.gridUsers = {
      enableSorting: true,
      enableCellEditOnFocus: true,
      data: Users.all,
      columnDefs: [
        { name: '', field: '$id', shown: false, cellTemplate: 'admin/system/gridTemplates/editUser.html',
          width: 34, enableColumnMenu: false, headerTooltip: 'Edit User' },
        { name:'email', field: 'email', width: '70%', enableHiding: false },
        { name:'type', field: 'type', enableHiding: false },
        { name:'status', field: 'status', enableHiding: false },
      ]
    };

}]);
