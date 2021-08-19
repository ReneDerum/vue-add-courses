new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title: '', 
          time: '',

      }
    },
    
    computed: {
        totalTime(){
            let totalTime = 0;
            for(let i=0; i<this.courses.length; i++){
                totalTime += parseInt(this.courses[i].time, 10);
            }
            return totalTime;
        }
    },
    
    methods: {
        saveCourse(){
            if (!this.title || !this.time) { return }
            const course = {
                title: this.title, 
                time: this.time
            };
            this.courses.push(course);
            this.title = '';
            this.time = '';
        }
    }
  })