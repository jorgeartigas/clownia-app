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
[<img src="https://www.nativescript.org/images/default-source/logos/nativescript-logo.png?sfvrsn=2" alt="VS Code" width="50" height="50">](https://cli.angular.io)   

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

https://github.com/jorgeartigas/Festivalers_v1/archive/master.zip   
o
```
git clone https://github.com/jorgeartigas/Festivalers_v1.git
```

## VS Code
Per a obrir/editar el nostre projecte, instal·lem visual studio code   
[<img src="https://raw.githubusercontent.com/viatsko/awesome-vscode/master/logo.ico" alt="VS Code" width="50" height="50">](https://code.visualstudio.com/)

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
ng serve
```
#### Per a fer un build "final" i poder desplegar primer hem de parar l'execució del `ng serve` amb `Ctrl+C` i confirmant que volem parar l'execució, ara ja podrem executar noves comandes


## FIREBASE HOSTING EXPLANATION
#### Creació del compte a firebase
Podem fer login amb qualsevol correu de google  
[<img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" width="50" height="50">](https://console.firebase.google.com/)  
Click on afegir un projecte i li donem el nom que volguem + escollir la regió, uns segons després ja tindrem firebase llest per a treballar... 
Hauriem d'anar al nostre projecte, obrir el terminal i executar aquesta comanda per a instal·lar el CLI de firebase
```bash
npm install -g firebase-tools
```
Haurem de fer login amb les credencials de google (les mateixes amb les que hem creat el projecte) per tal d'utilitzar les funcions de firebase, al terminal executem això i s'obrirà una pàgina web on podrem seleccionar amb quina compte configurar-ho, acceptem i llestos
```bash
firebase login
```
##### Si feu firebase init amb el nostre projecte, haureu d'eliminar primer l'arxiu `.firebasesrc`, ja que es creu que ja està configurat.

A continuació initcialitzem el nostre projecte com un projecte de firebase, i ens preguntara quines funcionalitats volem.
Escollim firebase realtime database i firebase hosting
```bash
firebase init
```
Ens preguntara a quin projecte volem desplegar la nostra aplicacio (a console.firebase.google.com) podem tenir més d'un projecte i hosting, cadascún amb la seva id... ens desplegarà l'aplicació en el hosting del projecte que li diguem.  
També que especifiquem quina serà la carpeta per defecte que es pujarà, li diem que volem que sigui `dist` 
Ens preguntarà si volem que la nostre pàgina sigui una single-page app (en el nostre cas, sí)  

### PRODUCTION BUILD
Per tal de poder pujar la nostra aplicació al servidor de firebase, hem de fer una build en mode producció que ens crearà la carpeta amb els arxius comprimits necessaris per a que funcioni.  
```bash
ng build --prod
```
Per a pujar-ho fem 
```bash
firebase deploy
```

I ens tornara la url de la consola del projecte i la del projecte desplegat, per a que la poguem visitar

## FIREBASE REAL TIME DATABASE EXPLANATION

#### En aquest punt de la guia d'instal·lació teniu el nostre projecte desplegat en el vostre propi hosting de firebase.  
##### Pero esteu utilitzant la nostre base de dades, per poder utilitzar la vostre, només heu de canviar les dades al fitxer de configuració següent

Busqueu la configuració de firebase (esta comentada amb la seguent linea) `// CONNECTION DATA TO FIREBASE`   
les dades es troben al següent fitxer: `src/app/app.module.ts`   
Heu de reemplaçar-les per les vostres que les podeu trobar a la consola de firebase del vostre projecte   
<img src="https://i.gyazo.com/66251ecfd16846c2a03df67bdd7037eb.png" width="700" height="250">

<img src="https://i.gyazo.com/72f5a6b3bbe813d34ec0694bafbc4f6e.png" width="700" height="350">

Per tal de que l'autentificació d'usuaris funcioni heu d'anar a la consola de firebase (el menu de l'esquerra teniu un apartat que es Authentication 
<img src="https://i.gyazo.com/e220d292e3f5f7d9c6c0046dccd8151c.png">