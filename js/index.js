window.onload = function () {
    if (JSON.parse(localStorage.getItem('notes')) !== null) {
        vm.lists = JSON.parse(localStorage.getItem('notes'))
    }
}
var vm = new Vue({
    el: '#app',
    data: {
        message: [{}, {}],
        tit: '',
        test: '',
        zuoz: '',
        fenlei: '',
        fen: '',
        lists: [{
            'bar': '体育',
            'title': '皇马大战利物浦',
            'text': '文字是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。出自《史记·秦始皇本纪》：“一法度衡石丈尺，车同轨，书同文字。”',
            'zz': '达芬奇',
            'time': moment().subtract(1538124777).calendar(),
            'btm': '已发布',
            'zt': true
        }, {
            'bar': '体育',
            'title': '皇马大战利物浦',
            'text': '文字是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。出自《史记·秦始皇本纪》：“一法度衡石丈尺，车同轨，书同文字。”',
            'zz': '达芬奇',
            'time': moment().subtract(1538124777).calendar(),
            'btm': '已发布',
            'zt': true
        }, {
            'bar': '体育',
            'title': '皇马大战利物浦',
            'text': '文字是一个汉语词汇，拼音为wén zì，基本意思是记录思想、交流思想或承载语言的图像或符号。出自《史记·秦始皇本纪》：“一法度衡石丈尺，车同轨，书同文字。”',
            'zz': '达芬奇',
            'time': moment().subtract(1538124777).calendar(),
            'btm': '已发布',
            'zt': true
        }, ]
    },
    methods: {
        gb: function (e) {
            this.lists[e].zt = !this.lists[e].zt;
            console.log(this.lists[e].zt)
            if (vm.lists[e].btm == '待修改') {
                vm.lists[e].btm = '已发布';
                localStorage.setItem('notes', JSON.stringify(this.lists))
            } else {
                vm.lists[e].btm = '待修改';
                localStorage.setItem('notes', JSON.stringify(this.lists))
            }

        }, add: function () {
            console.log(this.fenlei);
            this.lists.unshift({
                'bar': this.fenlei,
                'title': this.tit,
                'text': this.test,
                'zz': this.zuoz,
                'time': moment().subtract(Date.parse(new Date().getTime())).calendar(),
                'btm': '已发布',
                'zt': true
            });
            this.tit = '';
            this.test = '';
            this.zuoz = '';
            this.fenlei = '';
            localStorage.setItem('notes', JSON.stringify(this.lists))
        }, guanbi: function () {
            this.tit = '';
            this.test = '';
            this.zuoz = ''
        }, addss: function (o) {
            document.onclick = function () {
                var obj = event.srcElement;
                if (obj.type == "button") {
                    if (obj.id !== 'btn') {
                        vm.tit = '';
                        vm.test = ''
                    } else {
                        console.log(vm.fen)
                        vm.lists.splice(o, 1, {
                            'bar': vm.fen,
                            'title': vm.tit,
                            'text': vm.test,
                            'zz': vm.zuoz,
                            'time': moment().subtract(Date.parse(new Date().getTime())).calendar(),
                            'btm': '已发布',
                            'zt': true
                        });
                        vm.tit = '';
                        vm.zuoz = '';
                        vm.test = '';
                        localStorage.setItem('notes', JSON.stringify(vm.lists))
                    }
                }
            }
        }, dele: function (s) {
            if (confirm("确认要删除？")) {
                vm.lists.splice(s, 1)
                localStorage.setItem('notes', JSON.stringify(vm.lists))
            } else {
                return false
            }
        }
    },
    computed: {
        getTime: function () {
            return moment().subtract(this.lists.time).calendar()
        }
    },
})
