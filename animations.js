document.addEventListener("DOMContentLoaded", function() {
    const t = e => {
        const o = (t, e) => {
            setTimeout(() => {
                var e = t.getBoundingClientRect();
                e.top < window.innerHeight && 0 < e.bottom && t.classList.add("blockanim-visible")
            }, e)
        };
        new IntersectionObserver(e => {
            e.forEach(s => {
                if (s.isIntersecting) {
                    let e = [...s.target.classList].find(e => /^blockanim(-\w+)*(-\d+)?(-repeat)?$/.test(e)),
                        t = 0;
                    var a;
                    e && (a = e.match(/-(\d+)(-repeat)?$/)) && (t = parseInt(a[1], 10)), o(s.target, t)
                } else [...s.target.classList].some(e => /blockanim.*-repeat$/.test(e)) && s.target.classList.remove("blockanim-visible")
            })
        }, {
            rootMargin: "0px 0px -90px 0px"
        }).observe(e);
        var t = [...e.classList].find(e => /^blockanim(-\w+)*(-\d+)?(-repeat)?$/.test(e));
        let s = 0;
        t && (t = t.match(/-(\d+)(-repeat)?$/)) && (s = parseInt(t[1], 10)), o(e, s)
    };
    document.querySelectorAll('[class*="blockanim"]').forEach(t), new MutationObserver(e => {
        e.forEach(e => {
            e.addedNodes.forEach(e => {
                1 === e.nodeType && e.matches('[class*="blockanim"]') && t(e), 1 === e.nodeType && e.querySelectorAll && e.querySelectorAll('[class*="blockanim"]').forEach(t)
            })
        })
    }).observe(document.body, {
        childList: !0,
        subtree: !0
    })
});