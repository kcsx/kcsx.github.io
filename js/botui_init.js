function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
        delay: 800,
        content: "欢迎您！远道而来的客人！"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是迎宾台"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "长途跋涉久了，不妨在这休息一会儿？"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "我想知道更多你的故事",
                        value: "sure"
                    }, {
                        text: "希望我们下段旅程再见！",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({
            delay: 600,
            content: "🎉🎉🎉🎉🎉🎉"
        }).then(function () {
            secondpart()
        })
    },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "再见啦伙伴！很高兴你让我的旅程熠熠生辉"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 5000,
                content: "如你所见，这里是kcsx的个人博客空间，kcsx很高兴你的来访呢！"
            }).then(function () {
                botui.message.add({
                    delay: 15000,
                    content: "你是不是很好奇为什么不是blog，而是Journey？哈哈哈！"
                }).then(function () {
                    botui.message.add({
                        delay: 5000,
                        content: "其实对我来说，Journey更是表示了一种心境，是我对待这个博客的态度！"
                    }).then(function () {
                        botui.message.add({
                            delay: 8000,
                            content: "我更想让这个博客看起来像一段充满惊喜和意外的旅途！"
                        }).then(function () {
                            botui.message.add({
                                delay: 5000,
                                content: "目前的确还有很多不完善的地方啦"
                            }).then(function () {
                                botui.message.add({
                                    delay: 4000,
                                    content: "因为最近事情比较多，所以目前还有很多板块还没做出来呢！"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "那你对这个博客的定位是什么呢？🤔",
                                            value: "why-mashiro"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1e3,
                content: "emmm这个博客本身并不仅仅是技术博客哦！除了技术上的内容，还会分享我在各方面的心得体会呢！"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "那博主你觉得自己是个怎样的人呢？",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 3000,
                content: "评价自己难免主观欸，不如我说说自己想成为怎样的人吧！"
            }).then(function () {
                botui.message.add({
                    delay: 3000,
                    content: "面壁十年图破壁，难酬蹈海亦英雄"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "方便透露一下你的现实情况吗？",
                            value: "why-domain"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 5000,
                content: "君子之交淡如水"
            }).then(function () {
                botui.message.add({
                    delay: 3000,
                    content: "我目前还没这个打算呢~"
                })
            })
        }
}