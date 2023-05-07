"use strict";(self.webpackChunkqrfy=self.webpackChunkqrfy||[]).push([[7362],{26982:function(e,t,n){n(72791);t.Z=n.p+"static/media/google.d4096036739850926880299a7f8b66c8.svg"},87362:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),o=n(29439),i=n(72791),s=n(26864),c=n(4349),l=n(64880),u=n(81694),d=n.n(u),p=n(97892),g=n(11312),m=n(7951),h=n(96330),f=n(36249),x=n(30793),v=n(26982),j=n(33290),Z=n(38175),w=n(33025),k=n(94113),M=n(96844),b=n(87331),y=n(75087),C=n(54353),T=n(80184);function A(e){var t=e.withoutModal,n=e.guestId,u=e.onSuccess,A=(0,x.useIntl)(),P=(0,h.Z)(),S=(0,w.Ap)(),B=S.goToSection,I=S.parseError,_=S.fetchUserData,D=(0,i.useState)(!1),z=(0,o.Z)(D,2),W=z[0],q=z[1],E=(0,i.useState)(""),F=(0,o.Z)(E,2),L=F[0],R=F[1],N=(0,i.useState)(!1),V=(0,o.Z)(N,2),H=V[0],O=V[1],G=(0,l.TH)(),Q=(0,w.sS)(),U=Q.paramError,Y=Q.paramErrorMessage,J=Q.setParamError,$=(0,w.pN)(),K=(0,l.$B)(f.ZP.builder),X=(0,l.k6)(),ee=t&&!K;(0,w.WD)(A.formatMessage({id:"account.create.backConfirmation",defaultMessage:"No te llevar\xe1 m\xe1s de 30 segundos crear una cuenta, est\xe1s seguro que quieres irte?"}),ee);var te=(0,i.useState)("user_account_closed"===U),ne=(0,o.Z)(te,2),re=ne[0],ae=ne[1];function oe(){return(oe=(0,a.Z)((0,r.Z)().mark((function e(t){var a,o,i,s,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,o=t.password,q(!0),e.prev=2,e.next=5,g.Z.create({email:a,password:o,guestId:n,language:(0,m.jI)(),timezone:p.tz.guess(),gclid:localStorage.getItem("gclid")||void 0});case 5:localStorage.removeItem("gclid"),O(!0),e.next=18;break;case 9:if(e.prev=9,e.t0=e.catch(2),"user_account_closed"!==(null===(i=e.t0.response)||void 0===i||null===(s=i.data)||void 0===s?void 0:s.errorCode)){e.next=14;break}return R(null),e.abrupt("return",ae(!0));case 14:if("email_exists"!==(null===(c=e.t0.response)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.errorCode)){e.next=16;break}return e.abrupt("return",R($.email_exists));case 16:R(I(e.t0)),J("");case 18:return e.prev=18,q(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,9,18,21]])})))).apply(this,arguments)}(0,i.useEffect)((function(){H&&u&&u()}),[H]);var ie=P.object().shape({email:P.string().customEmail().required(),password:P.string().matches(/[a-zA-Z0-9]{3,30}/,{message:A.formatMessage({id:"common.validations.minAlphanumeric",defaultMessage:"Debe contener al menos {min} caracteres alfanum\xe9ricos"},{min:3})}).required()}),se=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!K){e.next=6;break}return e.next=4,_();case 4:e.next=8;break;case 6:return e.next=8,_(f.ZP.builder);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),R(I(e.t0)),J("");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();if(H&&!u)return(0,T.jsx)(j.Z,{title:A.formatMessage({id:"common.welcome",defaultMessage:"\xa1Bienvenido!"}),text:A.formatMessage({id:"account.create.success",defaultMessage:"Tu cuenta se ha creado con \xe9xito.\nYa puedes empezar a crear tus c\xf3digos QR."}),onButtonClick:se});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(M.o1.Container,{children:[(0,T.jsxs)(M.o1.Center,{children:[(0,T.jsx)(y.Z,{withoutModal:t}),Y&&(0,T.jsx)(M.o1.Alert,{severity:"error",style:{marginTop:10},children:Y})]}),(0,T.jsx)(s.J9,{initialValues:{email:"",password:"",repeatPassword:""},onSubmit:function(e){return oe.apply(this,arguments)},validationSchema:ie,validateOnBlur:!1,children:function(e){var r,a=e.values,o=e.isSubmitting;return(0,T.jsxs)(M.o1.Form,{children:[(0,T.jsxs)(M.o1.Center,{children:[(0,T.jsx)(C.Z,{title:A.formatMessage({id:"account.create.topTitle",defaultMessage:"Crea, administra y haz seguimiento de tus c\xf3digos QR"}),description:A.formatMessage({id:"account.create.topDescription",defaultMessage:"Reg\xedstrate ahora y prueba todas las funciones gratis"})}),(0,T.jsx)(M.o1.LoginButtons,{children:(0,T.jsx)(M.o1.LoginButton,{fullWidth:!0,href:(0,k.h)("create",n,null===(r=G.state)||void 0===r?void 0:r.from),variant:"outlined",startIcon:(0,T.jsx)("img",{src:v.Z,alt:"Google logo"}),children:(0,T.jsx)(c.Z,{id:"account.signUpWith",defaultMessage:"Crear cuenta con {provider}",values:{provider:"Google"}})})}),(0,T.jsx)(b.Z,{}),(0,T.jsx)(s.gN,{id:"create-account-email",name:"email",component:M.o1.TextField,autoFocus:!t,placeholder:A.formatMessage({id:"account.emailPlaceholder"})}),(0,T.jsx)(s.gN,{id:"create-account-password",name:"password",component:M.o1.TextField,type:"password",placeholder:A.formatMessage({id:"account.passwordPlaceholder"}),marginBottom:15}),(0,T.jsx)(M.o1.LevelPassword,{password:a.password}),(0,T.jsx)(M.o1.ButtonWrapper,{children:(0,T.jsx)(M.o1.ActionButton,{fullWidth:!0,type:"submit",disabled:o,loading:W,children:(0,T.jsx)(c.Z,{id:"common.createAccount",defaultMessage:"Crear cuenta"})})}),L&&(0,T.jsx)(M.o1.ErrorMessage,{children:L}),(0,T.jsxs)(M.o1.Text,{children:[(0,T.jsxs)("span",{children:[(0,T.jsx)(c.Z,{id:"account.alreadyHaveAccount",defaultMessage:"\xbfYa tienes cuenta?"})," "]}),(0,T.jsx)(M.o1.TextButton,{type:"button",onClick:function(){ee&&X.push("/login"),B("login",!t)},children:(0,T.jsx)(c.Z,{id:"common.login"})})]})]}),(0,T.jsx)(M.o1.Disclaimer,{className:d()({"with-error":!!$.checkTerms}),children:(0,T.jsx)(c.Z,{id:"account.createAccountDisclaimer",defaultMessage:"Al crear una cuenta, reconoce que ha le\xeddo y acepta las <linkTerms>condiciones de uso y contrataci\xf3n</linkTerms> y la <linkPolicy>pol\xedtica de privacidad</linkPolicy>.",values:{linkTerms:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,T.jsx)("a",{href:(0,f.ke)("termsAndConditions"),target:"_blank",rel:"noopener noreferrer",children:t})},linkPolicy:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,T.jsx)("a",{href:(0,f.ke)("privacyPolicy"),target:"_blank",rel:"noopener noreferrer",children:t})}}})})]})}})]}),(0,T.jsx)(Z.Z,{open:re,onConfirm:function(){ae(!1)},login:!1})]})}A.defaultProps={withoutModal:!1},t.default=A},87331:function(e,t,n){var r=n(96844),a=n(80184);t.Z=function(){return(0,a.jsx)(r.qE.Divider,{children:(0,a.jsx)(r.qE.DividerContent,{children:"o"})})}},33290:function(e,t,n){var r=n(54270),a=n(4349),o=n(21076),i=n(4246),s=n(33025),c=n(96844),l=n(80184);t.Z=function(e){var t=e.title,n=e.text,u=e.onButtonClick,d=(0,s.Ap)().close;return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsx)(r.q,{children:(0,l.jsx)("title",{children:t})}),(0,l.jsx)(o.Z,{in:!0,children:(0,l.jsx)(c.Vp.Container,{children:(0,l.jsxs)(c.Vp.Center,{children:[(0,l.jsx)(c.Vp.IconWrapper,{children:(0,l.jsx)(i.Z,{name:"circle_check_green",size:50})}),(0,l.jsx)(c.Vp.Title,{children:t}),(0,l.jsx)(c.Vp.Text,{children:n}),(0,l.jsx)(c.Vp.ActionButton,{fullWidth:!0,onClick:u||d,children:(0,l.jsx)(a.Z,{id:"common.accept",defaultMessage:"Aceptar"})})]})})})]})}},54353:function(e,t,n){var r=n(96844),a=n(80184);function o(e){var t=e.title,n=e.description;return(0,a.jsxs)(r.F8.TextWrapper,{children:[t&&(0,a.jsx)(r.F8.Title,{children:t}),n&&(0,a.jsx)(r.F8.Description,{children:n})]})}o.defaultProps={title:"",description:""},t.Z=o},75087:function(e,t,n){var r=n(37639),a=n(64880),o=n(36249),i=n(30793),s=n(96844),c=n(80184);function l(e){var t=e.withoutModal,n=(0,i.useIntl)(),l=(0,a.$B)([o.ZP.builder]),u=n.formatMessage({id:"altLogo",defaultMessage:"Generador de c\xf3digos QR"});return(0,c.jsx)(s.we.Container,{children:t&&!l&&(0,c.jsx)(s.we.LogoLink,{to:(0,o.ke)("home"),children:(0,c.jsx)(s.we.LogoImg,{src:r.jY,alt:u,title:u,width:104,height:21})})})}l.defaultProps={withoutModal:!1},t.Z=l},94113:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(29439),a=n(36249),o="https://accounts.google.com/o/oauth2/v2/auth",i={scope:"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",response_type:"code",client_id:"1068337497404-ldeirev97u9t7vc1cvlmftb5gqhhk5c4.apps.googleusercontent.com"};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,s=new URL(o),c={to:n===a.ZP.plansAndPayments?"payments":"dashboard",gclid:"create"===e?localStorage.getItem("gclid"):void 0};return t&&(c.guestId=t),s.searchParams.append("state",JSON.stringify(c)),s.searchParams.append("redirect_uri","".concat("https://qrfy.com","/api/user/account/oauth/google/").concat(e)),Object.entries(i).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];s.searchParams.append(n,a)})),s.toString()}},38175:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(93539),a=n(4349),o=n(4942),i=n(52775),s=n(35939),c=n(45950),l=n(43729),u=n(4246),d={Dialog:(0,c.D2)((function(e){return{paper:(0,o.Z)({padding:"24px 24px 24px",width:"100%",maxWidth:280,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},e.breakpoints.up("sm"),{maxWidth:388,padding:"40px 40px 40px"})}}))(i.ZP),Icon:(0,c.zo)(u.Z)({fontSize:"50px !important"}),Title:(0,c.zo)("p")({fontSize:"24px",lineHeight:"34px",color:"#000",textAlign:"center",marginTop:"24px",fontWeight:500}),Text:(0,c.zo)("p")((function(e){var t=e.theme;return(0,o.Z)({fontSize:13,lineHeight:"24px",marginTop:20,marginBottom:32,fontWeight:500,color:l.O9.gray.darkest},t.breakpoints.up("md"),{fontSize:16,lineHeight:"26px",marginTop:22,marginBottom:58})})),Button:(0,c.D2)((function(e){var t;return{root:(t={marginRight:12,width:"50%",minWidth:0,padding:0},(0,o.Z)(t,e.breakpoints.up("md"),{marginRight:17}),(0,o.Z)(t,"&:last-child",{marginRight:0}),t)}}))(s.Z)},p=n(80184);var g=function(e){var t=e.open,n=e.onConfirm,o=e.login,i=(0,r.Z)(),s=i.formatMessage({defaultMessage:"Esta cuenta ha sido eliminada. No es posible crear una cuenta con este correo.",id:"account.create.modalAccountClosed.description"}),c=i.formatMessage({defaultMessage:"Cuenta cerrada. Esta cuenta ha sido eliminada.",id:"account.login.modalAccountClosed.description"});return(0,p.jsxs)(d.Dialog,{open:t,children:[(0,p.jsx)(d.Icon,{name:"triangle_warning_white"}),(0,p.jsx)(d.Title,{children:(0,p.jsx)(a.Z,{id:"account.modalAccountClosed.title",defaultMessage:"Cuenta cerrada"})}),(0,p.jsx)(d.Text,{children:o?c:s}),(0,p.jsx)(d.Button,{onClick:n,children:(0,p.jsx)(a.Z,{id:"myAccount.closeAccount.confirmed",defaultMessage:"Confirmado"})})]})}}}]);