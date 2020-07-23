module.exports = {
  pug: {
    options: {
      data: {
        debug: false
      },
      pretty: true
    },
    files: {
      '<%=project.dist %>/index.html': '<%=project.app %>/tpls/index.pug',
      '<%=project.dist %>/sign-in-enter-name.html': '<%=project.app %>/tpls/sign-in-enter-name.pug',
      '<%=project.dist %>/sign-in-enter-sms-invalid.html': '<%=project.app %>/tpls/sign-in-enter-sms-invalid.pug',
      '<%=project.dist %>/sign-in-enter-sms.html': '<%=project.app %>/tpls/sign-in-enter-sms.pug',
      '<%=project.dist %>/sign-in.html': '<%=project.app %>/tpls/sign-in.pug',
      '<%=project.dist %>/list.html': '<%=project.app %>/tpls/list.pug'
    }
  }
};
