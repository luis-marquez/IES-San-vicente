var starter = angular.module('starter.controllers', []);

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        $rootScope.ajaxURL = "http://luis.iessv.es/ajax/";
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    
    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
    })

    .state('horario_menu', {
        url: "/horario_menu",
        templateUrl: "templates/horario_menu.html",
        controller: 'HorarioMenuCtrl'
    })
	
    .state('tu_horario', {
        url: "/tu_horario",
        templateUrl: "templates/tu_horario.html",
        controller: 'TuHorarioCtrl'
    })

    .state('horario_tus_grupos', {
        url: "/horario_tus_grupos/:codigo_grupo/:nombre_grupo",
        templateUrl: "templates/horario_tus_grupos.html",
        controller: 'HorarioTusGruposCtrl'
    })

	
    .state('ed_horario_grupos', {
        url: "/ed_horario_grupos",
        templateUrl: "templates/ed_horario_grupos.html",
        controller: 'EdHorarioGruposCtrl'
    })	

    .state('listado_profesores_horario', {
        url: "/listado_profesores_horario",
        templateUrl: "templates/listado_profesores_horario.html",
        controller: 'ListadoProfesoresHorarioCtrl'
    })	

    .state('horario_profesores', {
        url: "/horario_profesores/:documento/:nombre/:apellido1",
        templateUrl: "templates/horario_profesores.html",
        controller: 'EdHorarioProfesoresCtrl'
    })	
		
	
    .state('menu_principal', {
        url: "/menu_principal",
        templateUrl: "templates/menu_principal.html",
        controller: 'MenuPrincipalCtrl'
    })

    .state('menu_listado_alumnos_profesores', {
        url: "/menu_listado_alumnos_profesores",
        templateUrl: "templates/menu_listado_alumnos_profesores.html",
        controller: 'ComentarioMenuCtrl'
    })
	
    .state('lista_profesores', {
        url: "/lista_profesores",
        templateUrl: "templates/lista_profesores.html",
        controller: 'ListaProfesoresCtrl'
    })
	
    .state('todos_alumnos', {
        url: "/todos_alumnos/:documento",
        templateUrl: "templates/todos_alumnos.html",
        controller: 'TodosAlumnosCtrl'
    })

    .state('grupos_listado', {
        url: "/grupos_listado/:opcion",
        templateUrl: "templates/grupos_listado.html",
        controller: 'GruposListadoCtrl'
    })
	
    .state('fotos_profesores', {
        url: "/fotos_profesores/:grupo",
        templateUrl: "templates/fotos_profesores.html",
        controller: 'FotosProfesoresCtrl'
    })
	
    .state('alumnos_por_grupo', {
        url: "/alumnos_por_grupo/:opcion/:grupo",
        templateUrl: "templates/alumnos_por_grupo.html",
        controller: 'AlumnosGruposCtrl'
    })
	
    .state('grupos_profesores', {
        url: "/grupos_profesores/:documento",
        templateUrl: "templates/grupos_profesores.html",
        controller: 'GruposProfesoresCtrl'
    })
	
    .state('comentario_menu', {
	url: "/comentario_menu",
	templateUrl: "templates/comentario_menu.html",
	controller: 'ComentarioMenuCtrl'
    })
	
    .state('seleccion_grupo', {
        url: "/seleccion_grupo/:opcion/:documento",
        templateUrl: "templates/seleccion_grupo.html",
        controller: 'SeleccionGrupoCtrl'
    })

    .state('horario_seleccion_grupo', {
        url: "/horario_seleccion_grupo",
        templateUrl: "templates/horario_seleccion_grupo.html",
        controller: 'HorarioSeleccionGrupoCtrl'
    })

    .state('seleccion_alumno', {
        url: "/seleccion_alumno/:opcion/:grupo/:documento/:asignatura",
        templateUrl: "templates/seleccion_alumno.html",
        controller: 'SeleccionAlumnoCtrl'
    })
	
    .state('enviar_comentario', {
        url: "/enviar_comentario/:opcion/:grupo/:nombre/:nia/:documento/:asignatura",
        templateUrl: "templates/enviar_comentario.html",
        controller: 'EnviarComentarioCtrl'
    })
	
    .state('seleccion_asignaturas', {
        url: "/seleccion_asignaturas/:opcion/:grupo/:documento",
        templateUrl: "templates/seleccion_asignaturas.html",
        controller: 'SelecAsignaturaCtrl'
    })
	
    .state('ver_comentario', {
        url: "/ver_comentario/:opcion/:grupo/:nombre/:nia/:documento",
        templateUrl: "templates/ver_comentario.html",
        controller: 'VerComentarioCtrl'
    })
	
    .state('eliminar_comentario', {
        url: "/eliminar_comentario/:opcion/:grupo/:nombre/:nia/:documento",
        templateUrl: "templates/eliminar_comentario.html",
        controller: 'EliminarComentarioCtrl'
    })

    .state('notasp_ver_grupos', {
        url: "/notasp_ver_grupos",
        templateUrl: "templates/notasp_ver_grupos.html",
        controller: 'notasp_ver_grupos_controller'
    })

    .state('notasp_ver_alumnos', {
        url: "/notasp_ver_alumnos/:grupo/:grupocodigo",
        templateUrl: "templates/notasp_ver_alumnos.html",
        controller: 'notasp_ver_alumnos_controller'
    })
    
    .state('notasp_insertar', {
        url: "/notasp_insertar/:grupo/:grupocodigo/:nombre/:nia/",
        templateUrl: "templates/notasp_insertar.html",
        controller: 'notasp_insertar_controller'
    })
	
    .state('ed_seleccion_grupo_coment', {
        url: "/ed_seleccion_grupo_coment/:documento/:opcion",
        templateUrl: "templates/ed_seleccion_grupo_coment.html",
        controller: 'EDGrupoCtrl'
    })
		
    .state('comentario_grupo', {
        url: "/comentario_grupo/:opcion/:grupo",
        templateUrl: "templates/comentario_grupo.html",
        controller: 'ComentarioGrupoCtrl'
    })

    .state('faltas', {
        url: "/faltas",
        templateUrl: "templates/faltas.html",
        controller: 'faltasCtrl'
    })
	
    .state('verfaltas', {
        url: "/verfaltas",
        templateUrl: "templates/verfaltas.html",
        controller: 'verfaltasCtrl'
    })
	
    .state('borrarfaltas', {
        url: "/borrarfaltas",
        templateUrl: "templates/borrarfaltas.html",
        controller: 'borrarCtrl'
    })
	
    .state('selecprof', {
        url: "/selecprof",
        templateUrl: "templates/selecprof.html",
        controller: 'selecprofCtrl'
    })
	
    .state('horad', {
        url: "/horad/:documento",
        templateUrl: "templates/horad.html",
        controller: 'horadCtrl'
    })
	
    .state('horah', {
        url: "/horah/:documento/:horad/",
        templateUrl: "templates/horah.html",
        controller: 'horahCtrl'
    })
	
    .state('trabajo', {
        url: "/trabajo/:documento/:horad/:horah/",
        templateUrl: "templates/trabajo.html",
        controller: 'trabajoCtrl'
    })
			
    .state('fecha', {
        url: "/fecha/:documento/:horad/:horah/:trab/",
        templateUrl: "templates/fecha.html",
        controller: 'fechaCtrl'
    })

    .state('motivo', {
        url: "/motivo/:documento/:horad/:horah/:trab/:fecha/",
        templateUrl: "templates/motivo.html",
        controller: 'motivoCtrl'
    })
	
    .state('resumen', {
        url: "/resumen/:documento/:horad/:horah/:trab/:fecha/:motivo/",
        templateUrl: "templates/resumen.html",
        controller: 'resumenCtrl'
    })

	
    .state('reservas', {
        url: "/reservas",
        templateUrl: "templates/reservas.html",
        controller: 'reservasCtrl'
    })

    .state('reservas_fecha', {
        url: "/reservas_fecha",
        templateUrl: "templates/reservas_fecha.html",
        controller: 'reservas_fechaCtrl'
    })
	
    .state('reserva_horah', {
        url: "/reserva_horah/:fecha",
        templateUrl: "templates/reserva_horah.html",
        controller: 'reserva_horahCtrl'
    })
	
    .state('reserva_horad', {
        url: "/reserva_horad/:fecha/:horad/",
        templateUrl: "templates/reserva_horad.html",
        controller: 'reserva_horadCtrl'
    })
	
    .state('reserva_aula', {
        url: "/reserva_aula/:fecha/:horad/:horah/",
        templateUrl: "templates/reserva_aula.html",
        controller: 'reserva_aulaCtrl'
    })
	
    .state('reserva_curso', {
        url: "/reservas_curso/:fecha/:horad/:horah/:aula/:aulacodigo",
        templateUrl: "templates/reservas_curso.html",
        controller: 'reserva_cursoCtrl'
    })
	
    .state('reserva_grupo', {
        url: "/reserva_grupo/:fecha/:horad/:horah/:aula/:aulacodigo/:curso/:cursocodigo",
        templateUrl: "templates/reserva_grupo.html",
        controller: 'reserva_grupoCtrl'
    })
	
    .state('reserva_asignatura', {
        url: "/reservas_asignatura/:fecha/:horad/:horah/:aula/:aulacodigo/:curso/:cursocodigo/:grupo/:grupocodigo",
        templateUrl: "templates/reservas_asignatura.html",
        controller: 'reservas_asignaturasCtrl'
    })
	
    .state('reserva_formulario', {
        url: "/reserva_formulario/:fecha/:horad/:horah/:aula/:aulacodigo/:curso/:cursocodigo/:grupo/:grupocodigo/:asignatura/:asignaturacodigo",
        templateUrl: "templates/reserva_formulario.html",
        controller: 'reserva_formularioCtrl'
    })
	
    .state('reservas_quitar', {
        url: "/reservas_quitar",
        templateUrl: "templates/reservas_quitar.html",
        controller: 'reservas_quitarCtrl'
    })

    .state('reservas_listar', {
        url: "/reservas_listar",
        templateUrl: "templates/reservas_listar.html",
        controller: 'reservas_listarCtrl'
    }); 	
	
    $urlRouterProvider.otherwise('/login');
});