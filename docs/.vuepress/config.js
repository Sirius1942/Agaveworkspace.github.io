module.exports = {
    title: '龙舌兰测试工作室',
    description: '自动化测试基础服务提供者',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {text:'使用指南',link:'/'},
            { text: '产品与服务',
              items: [
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ] 
            },
            { text: '赞助', link: '/about/' },
            { text: '关于我们', link: '/about/' },
        ],
        sidebar: {
            '/android/': [
                        "",
                        "android1", 
                         ],
                "/ios/":[
                        "",
                        "ios1",
                        ],
                "/web/":[
                        "",
                        "web1",
                ],
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        
    },
    serviceWorker: true,
};
