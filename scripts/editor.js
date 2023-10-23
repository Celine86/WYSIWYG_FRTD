function commande(name, arg) {
    if (typeof arg === 'undefined') {
      arg = '';
    }
    document.execCommand(name, false, arg);
}
  

  