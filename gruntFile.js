module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    concat:{
      options: {
        separator : "\n\n"
      },
      dist:{
        src : ['js/main.js','js/controller.js'],
        dest: 'bin/<%=pkg.name%>.js'
      }
    },
    uglify:{
      options:{
        mangle : false
      },
      dist:{
        files:{
          'bin/<%=pkg.name%>.min.js' : ['<%=concat.dist.dest%>']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //tasks
  grunt.registerTask('default',['concat','uglify']);

}
