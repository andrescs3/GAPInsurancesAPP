# GAPInsurancesAPP
# Contenido: 

El repositorio consta de 2 proyectos:

En la carpeta Backend se encuentra la solución que contiene las apis que se van a consumir desde el front. Con los siguientes proyectos:

- Business: Se encuentran todas las clases y modelos del negocio.
- DataAccess: Se encuentran toda la configuración de acceso a datos, desde este proyecto se hace la inicialización de la base de datos usando entity framework.
- InsurancesAPI: Se encuentran todos los controladores que se van a poner disponibles.
- InsurancesAPI.Test: Proyecto de pruebas.

En la carpeta FrontEndt se encuentra un sitio web en desarrollado en angular 7, necesita nodejs 8 o superior para ejecutarla. El sitio contiene las carpetas principales
				
- framework: clases y enums usados en toda la aplicación
- insurances: contiene todos los componentes del CRUD
- layout: contiene la página principal del sitio y el menú superior.
- service: contiene los proveedores para llamado a los datos.
- models: contiene los modelos de datos.

# Instrucciones para ejecutar:
- Abrir solución GAPInsurancesAPP/Back/InsurancesAPI/InsurancesAPI.sln  en visual studio
- Cambiar cadena de conexion APIConnectionString a su base de datos en GAPInsurancesAPP/Back/InsurancesAPI/Database/App.config  y en  GAPInsurancesAPP/Back/InsurancesAPI/InsurancesAPI/Web.config .
- En la consola del administrador de paquetes nuget establece como proyecto por defecto al proyecto "DataProvider" y ejecutar el comando "update-database" para crear la base de datos.
- Ejecute el proyecto en visual studio
- Si el puerto de la aplicación cambia cambiar en la ruta GAPInsurancesAPP/Front/GAPInsurancesApp/src/app/services/ las urls de los servicios.
- Ejecute la aplicación localmente abriendo en una consola del sistema la carpeta GAPInsurancesAPP/Front/GAPInsurancesApp/ y ejecute el comando ng serve --open
- Los test de angular de pueden correr soobre esa misma carpeta con ng test



