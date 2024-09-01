# SimpleHTTPS
Un servidor HTTPS simple para NodeJs.
# Pasos previos
Debes crear los certificados que vas a usar, ya sea en modo solitario (standalone) o compartido (si quieres usar unos previamente creados).
<br> Editar el fichero <b>app.js</b>:
- añade la ruta exacta de la llave y el certificado para que puedas iniciar el servidor HTTPS.
# Como crear un certificado con llave
- siga los pasos en <a href="https://certbot.eff.org/">Crear certificado</a>
# Como usar
- instala NodeJS y NPM
- <code>sudo npm install https fs express</code>
- habilita en el cortafuegos <code> sudo ufw allow https</code>
- ejecuta <code>sudo node app.js</code> y disfruta.
# Porqué usar "SUDO"
Los puertos reservados son aquellos que van del rango 0 al 1023. Para poder escuchar en estos puertos, en la mayoría de los sistemas operativos basados en UNIX (como Linux), es necesario tener privilegios de superusuario (root). Esto es porque estos puertos están tradicionalmente reservados para servicios y protocolos bien conocidos y esenciales, como HTTP (80), HTTPS (443), SSH (22), FTP (21), etc.
