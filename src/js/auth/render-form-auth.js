export function renderFormAuth() {
  const template = `
  <form class='form'>
    <input type="text" name="username" placeholder="NAME">
    <input type="email" name="email" placeholder="EMAIL">
    <input type="password" name="password" placeholder="PASSWORD">
    <button type="submit" id="button-login">SIGN UP</button>
  </form>
`
  document.body.insertAdjacentHTML('afterbegin', template)
};
