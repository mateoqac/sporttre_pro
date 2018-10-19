import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { NetworkLayerService} from '../../services/network/network-layer.service';
import { SessionManagerService } from '../../services/session-manager/session-manager.service'

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(private events: Events,
    private spinner: NgxSpinnerService,
    private networkService: NetworkLayerService,
    private sessionManagerService:SessionManagerService) {

    this.events.subscribe('native.keyboardshow', () => {
      document.body.classList.add('keyboard-open');
    });

  }

  showPassword = false;
  passwordInputType = 'password';
  showPasswordIcon = 'eye';
  ionContentCanScroll = 'false';


  showPass() {
    if (this.showPassword===false) {
        this.showPassword = true;
        this.passwordInputType = 'text';
        this.showPasswordIcon = 'eye-off';
    } else {
        this.showPassword = false;
        this.passwordInputType = 'password';
        this.showPasswordIcon = 'eye';
    }
  }

  gotoForgotPassword() {

  }

  goToJoinEvent() {

  }

  onSubmit(credentials) {
    this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);

    this.networkService.login(credentials.username, credentials.password).subscribe(
      response => {
        console.log('login success');
        console.log('login success: username = ' + response.data['tpis:username']);

        this.sessionManagerService.clearSessionData(); // in case anything in localStorage
        this.sessionManagerService.setAuthenticationData(response.data);
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        if (error.status === 401 || error.status === 400) {
          this.sessionManagerService.clearSessionData(); // in case anything in localStorage
          console.log('ERROR IN LOGIN')
          // var message = AppUtils.Translations.getTranslation("Validation_Login_Failed_Msg");
          // AppForms.showErrorProcessingRequestAlert(null, message);
        }
    });
//     RequestsFactory.AuthenticationEndpoints.Login(credentials.username, credentials.password)
//     .then(
//     function successCallback(response) {
//         console.log('login success');
//         AppUtils.LoadingIndicator.hideLoading();

//         //log('login success: username = ' + response.data["tpis:username"]);
//         dataManagers.clearSessionData(); //in case anything in localStorage
//         dataManagers.sessionManager.SetAuthenticationData(response.data);

//         AppUtils.Navigator.clearNavigationReturnData();

//         AppUtils.Navigator.clearCache().then(function () {
//             AppUtils.Navigator.clearHistory();
//             $scope.hasSeenTermsAndConditions();
//         });
//     },
//     function errorCallback(response) {
//         log('login failed: status = ' + response.status);
//         AppUtils.LoadingIndicator.hideLoading();

//         if (response.status == 401 || response.status == 400)
//         {
//             dataManagers.clearSessionData(); //in case anything in localStorage
//             var message = AppUtils.Translations.getTranslation("Validation_Login_Failed_Msg");
//             AppForms.showErrorProcessingRequestAlert(null, message);
//         }
//     }
// );
  }
}
