import Vue from './lib/vue'
import MyNavigator from './layout/navigator'
import MyFooter from './layout/footer'
import Preview from './layout/preview'
import MyVideo from './layout/video'
import Course from './layout/course'
import Project from './layout/project'
import Learning from './layout/learningAndJob'
import Experience from './layout/experience'
import Teacher from './layout/teacher'

new Vue({
	el: '#app',
	components: {
		MyNavigator,
    MyFooter,
    MyVideo,
    Preview,
    Course,
    Project,
    Learning,
    Experience,
    Teacher
	}
})