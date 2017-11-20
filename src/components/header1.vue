    <template>
    	<div class="h1" ref="testfy">
    		<ul>
    			<li v-for="tab in tabs" @click="go(tab)">{{tab.text}}</li>
    		</ul>
    		<div class='h2' v-html="fy"></div>
    	</div>

    </template>

    <script>
     import {fetchget,fetchpost} from '../store/api'
    	export default{
    		data(){
    			return{
    				tabs : [
    				{id:0,text:'主页',url:'xx.html'},
    				{id:1,text:'主页2',url:'xx.html'},
    				{id:2,text:'主页3',url:'xx.html'}
    				],
    				fy: 'no',
    				ab: {id:0,text:'cnmcnm'},
                    box:'',
                    gettop:0
    			}
    		},
            created () {
                fetchget('/mark')
                .then(data => {
                    this.fy = data;
                });
            },
            mounted : function(){
                 this.$nextTick(() => {
                    window.addEventListener('scroll',this.listenscroll)
                 })
            },
    		methods: {
    			go(a){
    				if(a.id =='1'){
    					fetchpost('/hello',this.ab)
    					.then(data => {
    						console.log(data);
    					})
    				}else
                   if(a.id=='2'){
                        fetchget('/mark')
                        .then(data =>{
                           this.fy = data;
                           console.log(this.fy);
                        })
                   }
                   
    			},
                listenscroll(){
                 let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  // console.log(scrollTop)
                }

    		},
            destroyed () {
  window.removeEventListener('scroll', this.listenscroll)
}
    	}
    </script>
    <style lang="scss" scoped>
     .h2{
     	width: 80%;
     	margin: 0 auto;
     	h1{
     		text-align: center;
     		padding: 20px 0 20px 0;
     	}
     	pre{
     		overflow: auto;

     	}
     }

    </style>