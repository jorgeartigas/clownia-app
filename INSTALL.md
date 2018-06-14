# Clownia install guide
Entorn de treball:
`Windows 10 x64 bits`

## NODE.js 
NODE.js es el intèrpret de javascript del costat servidor.   
He treballat amb la versió: `v8.9.4`   
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node JS" width="100" height="50">](https://nodejs.org/es/)    
Amb NODEjs, s'instal·lara el gestor de paquets `npm` per a JavaScript

## NativeScript CLI
Obrim un terminal i executem la comanda, aquesta ens instal·lara el `command line interface` per a nativescript de forma global
```
npm install -g nativescript
```
[<img src="https://www.azoft.com/wp-content/uploads/2017/10/nativescript@3x.png" alt="Nativescript" width="50" height="50">](https://docs.nativescript.org/angular/start/introduction)   

Descarergar dependències en Windows, assegureu-vos de executar el terminal amb administrador
```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
```
Descarregar dependències en MacOS, copiar al terminal
```
ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"
```

Per a verificar la instal·lació feu la següent comanda, si no dona cap error podem continuar
```
tns doctor
```
Per a crear un nou projecte, un cop instal·lat `nativescript cli`, anem al directori destijat i executem.
En el nostre cas no cal fer `tns create`, cloneu el projecte de github a una carpeta i aneu al següent pas
```
tns create PROJECT NAME
```
Això creara tota l'estructura de carpetes del nostre projecte.
#### Descarrega el nostre projecte

https://github.com/jorgeartigas/clownia-app/archive/master.zip
o
```
git clone https://github.com/jorgeartigas/clownia-app.git
```

## VS Code
Per a obrir/editar el nostre projecte, instal·lem visual studio code   
[<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfz8FAK0kFKnNR4dviscoczzCaqBbSphZj1CZfsd2gYznRJKLe" alt="VS Code" width="50" height="50">](https://code.visualstudio.com/)

Un cop instal·lat obrim l'aplicació  
Per tal de facilitar el treball i millores visuals, hem instal·las aquestes extension.
Suggereixen codi a mesure que vas escribint, i et faciliten una breu explicació dels parametres que ha de rebre la funció que estas editant, afegeixen icones als arxius per a diferenciar de quin tipus son més ràpidament.   
   
<img src="https://i.gyazo.com/e261d444a5def2233340d9120d550025.png" alt="VS Code Extensions">

#### Obrim la carpeta del projecte creat / descarregat 
```
Archivo -> Abrir carpeta
```
Per a obrir un terminal en el editor de codi combinem les tecles
```bash
Ctrl + ñ
# L'altre opció es amb el menú de l'aplicació
Ver -> Terminal integrado
```
A continuació executem aquesta comanda per tal d'instal·lar totes les `dependències` del nostre projecte i poder començar amb l'edició, execució del mateix en local o preparar-lo per a la distribució.   
```bash
# Asegurat de que la terminal es troba a la ruta del projecte, si no fes:  cd /PATH/
npm install
```
Un cop finalitzi l'instal·lació dels paquets, prodecim amb aquesta comanda, que ens farà un `build` del projecte per a poder veure els canvis de forma local en temps real. (development mode)
```
tns run android
```
o si tenim un mac, tambe podem desenvolupar per ios
```
tns run ios
```
