import Vue from './lib/vue'
import MyNavigator from './layout/navigator'
import MyFooter from './layout/footer'
import Preview from './layout/preview'
import CustomVideo from './components/CustomVideo'
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
    CustomVideo,
    Preview,
    Course,
    Project,
    Learning,
    Experience,
    Teacher
	}
})