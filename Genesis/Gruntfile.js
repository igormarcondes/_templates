module.exports = function(grunt) {
     'use strict';

	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');
	 grunt.loadNpmTasks('grunt-contrib-copy');

	 grunt.initConfig({
	 	paths: {
			custom:    'R:/IKCLoja/Genesis/Repository/TVLar/',
			custom2:    'W:/Genesis/Repository/TVLar/'
        },
		// Sass: compiles SCSS files
		sass : {
		  dist : {
			options : { style : 'compressed' },
			files : {
			  '<%= paths.custom %>locales/custom/css/global.css' : 'sass/global.scss',
			  '<%= paths.custom %>locales/custom/css/mobile.css' : 'sass/mobile.scss',
			  '<%= paths.custom2 %>locales/custom/css/global.css' : 'sass/global.scss',
			  '<%= paths.custom2 %>locales/custom/css/mobile.css' : 'sass/mobile.scss'
			}
		  }
		}, // sass

		copy: {
		  js: {
		  	expand: true, 
		  	cwd: 'assets/js/', 
		  	src: ['**/*'], 
		  	dest: '<%= paths.custom %>/locales/custom/js/'
		  },
		  img: {
		    expand: true,
		    cwd: 'assets/img/', 
		    src: ['**/*.{png,jpg,svg,gif,ico}'],
		    dest: '<%= paths.custom %>/locales/global/img/',
		  },
		  img2: {
		    expand: true,
		    cwd: 'assets/imagens/', 
		    src: ['**/*.{png,jpg,svg,gif}'],
		    dest: '<%= paths.custom %>/imagens/',
		  },
		},//copy

		watch : {
	      	css: {
                files: 'sass/**/*.scss',
                tasks : ['sass']
        	},
        	js: {
        		files: 'assets/js/*.js',
        		tasks : ['copy:js']
        	},
        	img: {
        		files: 'assets/img/**/*',
        		tasks : ['copy:img']
        	},
        	img2: {
        		files: ['assets/imagens/**/*.{jpg,gif,png,ico}'],
        		tasks : ['copy:img2']
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