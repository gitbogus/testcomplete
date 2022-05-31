function example()
{
  Browsers.Item("chrome").RunOptions = "--disable-web-security --user-data-dir=\"C:\Users\A74581\AppData\Local\Google\Chrome\User Data\Default\" --disable-site-isolation-trials";           //->  (괄호안에 빨간글씨는 자신경로를 넣어주세요!) 
  Browsers.Item(btChrome).Run("https://lgit.b2bprdev.singlex.com/portal/main/portalMain.do");

}