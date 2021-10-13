

//Entity: Persona
//Persona. (Button) View: FormularioWCS
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONISRWDFN_125365 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    alert("Hola " + entities.Persona.nombre + "  "+ entities.Persona.apellido);

};