module.exports = function(grunt) {
     'use strict';

	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.loadNpmTasks('grunt-contrib-copy');

	 grunt.initConfig({
	 	paths: {
         custom:    'R:/IKCLoja/Genesis/Repository/Genesis/locales/custom/' 
        },
		// Sass: compiles SCSS files
		sass : {
		  dist : {
			options : { style : 'compressed' },
			files : {
			  '<%= paths.custom %>css/global.css' : 'locales/custom/sass/global.scss',
			  '<%= paths.custom %>css/mobile.css' : 'locales/custom/sass/mobile.scss'
			}
		  }
		}, // sass

		copy: {
		  js: {
		  	expand: true, 
		  	cwd: 'locales/custom/js/', 
		  	src: ['**/*'], 
		  	dest: '<%= paths.custom %>/js/'
		  },
		  img: {
		    expand: true,
		    cwd: 'locales/custom/img/', 
		    src: ['**/*.{png,jpg,svg,gif}'],
		    dest: '<%= paths.custom %>/img/',
		  },
		},//copy

		watch : {
	      	css: {
                files: 'locales/custom/sass/**/*.scss',
                tasks : ['sass']
        	},
        	js: {
        		files: 'locales/custom/js/*.js',
        		tasks : ['copy:js']
        	},
        	img: {
        		files: 'locales/custom/img/**/*',
        		tasks : ['copy:img']
        	}
	    } // watch
		
	 });
	 
	 // Tarefas que serão executadas
	 grunt.registerTask( 'default', ['sass'] );

	 // Tarefa para Watch
  	 grunt.registerTask('w', ['watch'] );
  	 grunt.registerTask('copyjs', ['copy:js'] );
  	 grunt.registerTask('copyimg', ['copy:img'] );
 };