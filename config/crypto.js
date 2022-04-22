const { publicEncrypt, privateDecrypt } = require("crypto");
const crypto = {
  CRYPTO_PASSPHRASE: "",
  privateKey:
    "-----BEGIN ENCRYPTED PRIVATE KEY-----\n" +
    "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkqhkiG9w0BBQwwHAQIPyWtykRTO5ACAggA\n" +
    "MAwGCCqGSIb3DQIJBQAwHQYJYIZIAWUDBAEqBBDi13kmmc7V3RiGfMeZpeKPBIIJ\n" +
    "UKwKzed93dASBDYGW2bbM2L2iOjo/v0D4Ve/6YHLqsjY/Bzb0n0MGi4QohJkt/bA\n" +
    "XyZjBWxb1R7Gv4Py5OWIYCyrxL2Ep6MLnIKzbvN0OYQe3W37NK++UA+iuNoRrfvD\n" +
    "iV+odwqUZOvICVxzJGTgnDLHsuvkNzstGchyMxnqOFcC5up+x+DIpOyxdHmztJgD\n" +
    "Vw8rRIpP3SC/diOETwdz1yDnFYhryPt93HbJKvmh1ZeFahVRssR/yIjYeDc8i3T4\n" +
    "MaOfYaUUlUvbWBK0MVvdo3hi+FBYQdoQ5+jk9CFuwr/oZjBolK9PGe2Nbc5ocWkn\n" +
    "wcvqgwJFXQO7xNOx+hQoLtnjpFuxVk0ZxE+dMpNDGoEHW0P41rJg3yz4g+Ymqs1u\n" +
    "bk80fXQEp6V6rnUpwCGrSFkrUCUnOy4c+BYsD26Tw2jshv8WriFUvNHdsyeN9hYy\n" +
    "xEUCjBsfwfvJ96pY9+wBJA8Dh3vBawkCP/9lEKdSvABK7R7UpaM5jw+jGgbd8XzB\n" +
    "Q5oNYb56ToFKU07DwJnBOeZ43F7gLla9vsDdfeFoePgw737V0gs4sGcxclQ+eO2w\n" +
    "cu/gtDnONwA2HFu39J3FBmMqvHhRPmCaHmbRmCYUmBrFfVO6ToG6AGso3cM3P3KD\n" +
    "xWkLt47sWfxIUJJ9kNT4OQyggzKReejbrs6ZNmbv8mVmavoGpVeU5EOTot8/mX7x\n" +
    "i3ze6HyvBMP/Rzx00go+J+r97TdARBAyGzT5NeotFWJ5c4CiKhjRrNTEBVCL8G9U\n" +
    "J5dPcgzQogsnKUuTQauX3ICpvNvJfzicnFTdD/QydHWH0ZL8iW4pock1zP5i2076\n" +
    "uzxNxvMIY06dCNt6CL62k5KEQtSklw7thr2FwloeMpk2e2pKzm0Kg+37Rm0re6hR\n" +
    "xrNxs6D0dMAxusiXkfMizhukUESFCm28t/BGlcU3SJ4IPXPX4i9HFYUrILSalxIT\n" +
    "y0U5wmQtwLUUQm/LaYJXeGEoeZas6nlmhIkBgl2ha4wPgoI8fG14q+CMg6kAHrux\n" +
    "nDUhdCUxqau9VOWU3LW7vR0hsl2M465FmKcaE7BTsRySARTCmMUylsEpQzTw3IBy\n" +
    "jSkIlg5H+dX2MGRBovK/8jF9qBRIevw9KxvSkNfJ7ZG8YMz5c7I9prkt6cneVEMU\n" +
    "CQzbIEF+VOvWp2gUS6M7niIghHHEMGu7Txe3FpZoGyp6XbWatt/4UbwbjlZgQcNj\n" +
    "SmSZOqTdb/Gi0CH10kqlwjSaW+NM5xtsn64qvJRcgfsPDKGCf5nBtvqUOYNzTlll\n" +
    "iV2+9SnSaXrRJzPH1LYhmbjzEX3+j3vKud1EFQVyzxBDhF2ynUN6vvZuHtyd7f9+\n" +
    "X8acnEvDJNxgV2HPcFBPG8+v9XsWvXKgjXA6vFYWigr+HEcgalPghTFpOY/XzYeJ\n" +
    "Md+qp1OpwpX+iuMfxrmE4aK2JP7uZuu6yAVISjVHWaRF0K3Nc5Qp7MaQtgklt+Yp\n" +
    "tyonCX91Sx7nz81+lEdkkXNgrYrsmSk6ZfMmpsbkCE+Mx9RQEk5xX105uDz8ANW7\n" +
    "eq1BdNtQUYhUDe9saVO08MoZ1AKKsx1tYMPOD4+zCLQf8Wwi2OPUIcdZBIDep8WH\n" +
    "mfws8eiWBlSvwD7wipL9IE7NhmY6KY3dmMVm4I5Hj7MeoTx95S8oo3JrNNfvEVm3\n" +
    "W2FUhErJo9wyZkVV2l0p5IHytvkPoGZ5GoNYF6jImfcpkJJFR/mmvvd8Jm5wYXPo\n" +
    "/83tqOs2XkDx81pb39BBBvKxb7efDgKTyTC92m8UAiHsYx7g+s2F+o3Jg3kKJfrW\n" +
    "xtjT9SE8z4hbnlbk3ybDbwps7am0VlXGjeS0dVJlpQ3GEkAmL5AYplx/czojj4lW\n" +
    "QSN4vtzbFBG9diwh/uwSrFzyTyCsCKzIllPuwPj0sdtXrMG5tegVZExNRogpvyNa\n" +
    "0fMiQ/ZlUHnK1oOT4eZpTh7ZE8IUzTrhy6hHr3RQPJIorfEiPau5+Bmpaq63XJWJ\n" +
    "HtcyzTpywJOPQ4fmkBFZ9UgqpTzalo0awYILuENGa2omoG8Bnjc4QPkvNRWNRUXt\n" +
    "VA6nA8QdllszGIaM5xZrkXSLABZSo8eWl30e9OXicA6xWHwmXcJ65ImMeo8fMWec\n" +
    "hC6cKpeaxTgivcxoTGaWhUkAXljuY/8AvEoohNP0QI6DZGVLsD/i9J2fhhcDYLnF\n" +
    "BTSwTQhar/rbHDScsx9UfxzcDRG4dRYnFwnlwYU6oyJXSuVQG+rn3SVSAwcjFb5D\n" +
    "y9FqoonQyXr9Vq/meCUfMG5tKDWoRj2ZlVayph13eYhou7oJ7F7agRlU++Y0aizJ\n" +
    "LessD5PvoBrD2PEwQ96yrACug+FuG06oQWO//P1ziMubOOUeMR41gI/qNmGCu5xK\n" +
    "kuYJ+AuMHIkz6hNRhZGp3henqNUEoWdocQ0XEauhkMq2oh+YwN0bYYqKUAt45N+O\n" +
    "DxAHd/eGoG68w2sqCJWkNm0PpVRLGcxMQqVlOYJ7RVb/KJXjALGfQfXQnlT+VqQY\n" +
    "qP7j7r0ggFLjj5i40EjmFMI0GpfUaEC7BfgjXuWpqDgbJtltdtc79qm5325YIewn\n" +
    "ynH+8Ea4sYtSZWynEYRAaH6ISSECAwT6i9obNiByAXmAATVNtG3IL4XsZGFCZPkV\n" +
    "zvNNskl/ZZCBG4ETIYOVT7YEgrS0hZMRYgYDo5xxckfI2+p6PKYa4nIlk86y20DX\n" +
    "cGp7hZKSgxdMrWmzRxrsxKSxwYkfdZk0Ny2rWLsZmdx65lije5tpEt6zkrBVtNFv\n" +
    "P6Dr8HBRdhncaGWtGexkNqAklqK3mcm0kexgHa1PGxOY6l9sRnTTjJ4NssdbXDdO\n" +
    "SX2iAJQo7/+JNhSmLkf89zzjastAQkjH7lfYj0ikFflNBEIcBdhnAwLgzR5iRx3P\n" +
    "Z0a/V1SKa+N73dkLIGOL4KjsTyX9f6PJKtNvAFPL2TqQkwixRbEYJQ7BopQq4s+k\n" +
    "AWuBc7XxV3wNRe7TYQcoXUBTTa4a0pWVJWhvKL/xdmkZcOAVviEfnbFrh1bjESSX\n" +
    "kL6v0WMdHaLTAB4FcHwop+2tLuA7tpkjx9GL7i8svQltFNp9ae6ziNL7N/RyWy8r\n" +
    "Eib6QX0CkxdGtDMyaFuGg9gKrL7XGQUQe1z/Tf8XwhnXkkEx5g9U1qk6EDKN/B9U\n" +
    "wogY9V5hrNuk29MIgbB6VMtXC99sc+7bHwnJQy5lhsq9\n" +
    "-----END ENCRYPTED PRIVATE KEY-----\n",

  publicKey:
    "-----BEGIN PUBLIC KEY-----\n" +
    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA7duyVbiukGm1gmc5Cnq9\n" +
    "WCwURoiltEYIExuVV99UDdwjFQbBmBVUGWZxg0cKyJh7QQe9ISxsVUMkeL8FmFtL\n" +
    "TDaH17V6RqzvQqLcUbDZTru/ubMqaWLZjea1tLlj+9asTJRX+I5VCLdQjw0C/SSZ\n" +
    "2iam5AVACcXckgg2rlkCdP5BMwNQhtBYoiWCbyurqRkn2SPmdlSQFQfGPSyq0e/1\n" +
    "hGoHthICxbb4Khk9raNKAIDqg0Oh10FII9yPa+CA6m3aSu8a39/WhinOpcKtV+rs\n" +
    "scr/hTh39nGzWvR7ZTl5/421FAmYNjQwmhyeQPCSUAD8PGRrp0lEGY10HWnuJfnS\n" +
    "MO+htpt7Jfb8yBO/X4igrSufImJD0dk5PX5CKzb84XW6e0Ef/HpJX4ygdFXkWhQ+\n" +
    "KraJXDL7B27cnxv7qMnIcbrqmtRdNvG2VYNGncH0TQ42ZW1/mbBYHZfaFR7mcYHS\n" +
    "x0AjyPK9LeoBzOIzn9u6mKUbzY65n62E/bVorWvPnQFfZMpcp972lPKEyLmc83Kf\n" +
    "5JLik7Km2BMogvD6QA9MIosiHhweh5tC4f3esC5IgWPJy9JpIppCLcotdkj2GHOU\n" +
    "m4ERV3vfv1sXk26LdSMUQU5/o0xF04z+1whzZMc/nfgGw+26/CrTkRO5fXBitTey\n" +
    "wWD4FzbGHttxyDZygN0wYlkCAwEAAQ==\n" +
    "-----END PUBLIC KEY-----\n",
};
const encrypt = (value) => {
  return publicEncrypt(crypto.publicKey, Buffer.from(value)).toString("base64");
};

const decrypt = (value) => {
  return privateDecrypt(
    {
      key: crypto.privateKey,
      passphrase: crypto.CRYPTO_PASSPHRASE,
    },
    Buffer.from(value, "base64")
  ).toString("utf8");
};

const generateKeys = () => {
  return generateKeyPairSync("rsa", {
    modulusLength: 4096,
    namedCurve: "secp256k1",
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: crypto.CRYPTO_PASSPHRASE,
    },
  });
};

module.exports = { crypto, decrypt, generateKeys, encrypt };
