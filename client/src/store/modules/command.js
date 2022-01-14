let socket = WebSocket.prototype 

const command = {
    state: () => ({
        data: {},
    }),
    mutations: {
        setData: function(state, data){
            state.data = {...state.data, ...JSON.parse(data)}
        }
    },
    actions: {
        initCommand: function(context){
            socket = new WebSocket('ws://'+window.location.host+':81');
            // socket = new WebSocket('ws://192.168.2.102:81');

            socket.addEventListener('message', function (event) {
                context.commit("setData",event.data);
            });
        },
        setOnTimeDay: function(context, time){
            let obj = {
                id: "on-time-day",
                value: time
            }
            return socket.send(JSON.stringify(obj))
        },
        setOffTimeDay: function(context, time){
            let obj = {
                id: "off-time-day",
                value: time
            }
            return socket.send(JSON.stringify(obj))
        },
        setOnTimeNight: function(context, time){
            let obj = {
                id: "on-time-night",
                value: time
            }
            return socket.send(JSON.stringify(obj))
        },
        setOffTimeNight: function(context, time){
            let obj = {
                id: "off-time-night",
                value: time
            }
            return socket.send(JSON.stringify(obj))
        },

    },
    getters: {
        getOnTimeDay:function(state){
            return state.data["on-time-day"]
        },
        getOffTimeDay: function(state){
            return state.data["off-time-day"]
        },
        getOnTimeNight: function(state){
            return state.data["on-time-night"]
        },
        getOffTimeNight: function(state){
            return state.data["off-time-night"]
        },
        getSystemTime: function(state){
            return state.data["__time"]
        },
    }
  }
export default command
  