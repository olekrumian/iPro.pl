(function (q, g) {
  "function" === typeof define && define.amd ? define([], g) : "object" === typeof module && module.exports ? module.exports = g() : q.Rellax = g()
})("undefined" !== typeof window ? window : global, function () {
  var q = function (g, t) {
    var b = Object.create(q.prototype),
      l = 0,
      u = 0,
      n = 0,
      v = 0,
      c = [],
      w = !0,
      A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (b) {
        return setTimeout(b, 1E3 / 60)
      },
      p = null,
      x = !1;
    try {
      var k =
        Object.defineProperty({}, "passive", {
          get: function () {
            x = !0
          }
        });
      window.addEventListener("testPassive", null, k);
      window.removeEventListener("testPassive", null, k)
    } catch (f) {}
    var J = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
      K = window.transformProp || function () {
        var b = document.createElement("div");
        if (null === b.style.transform) {
          var a = ["Webkit", "Moz", "ms"],
            d;
          for (d in a)
            if (void 0 !== b.style[a[d] + "Transform"]) return a[d] + "Transform"
        }
        return "transform"
      }();
    b.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      center: !1,
      wrapper: null,
      relativeToWrapper: !1,
      round: !0,
      vertical: !0,
      horizontal: !1,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function () {}
    };
    t && Object.keys(t).forEach(function (c) {
      b.options[c] = t[c]
    });
    g || (g = ".rellax");
    k = "string" === typeof g ? document.querySelectorAll(g) : [g];
    if (0 < k.length) {
      b.elems = k;
      if (b.options.wrapper && !b.options.wrapper.nodeType)
        if (k = document.querySelector(b.options.wrapper)) b.options.wrapper = k;
        else {
          console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
          return
        } var B = function () {
          for (var f = 0; f < c.length; f++) b.elems[f].style.cssText = c[f].style;
          c = [];
          u = window.innerHeight;
          v = window.innerWidth;
          D();
          for (f = 0; f < b.elems.length; f++) {
            var a = b.elems[f],
              d = a.getAttribute("data-rellax-percentage"),
              e = a.getAttribute("data-rellax-speed"),
              y = a.getAttribute("data-rellax-vertical-speed"),
              g = a.getAttribute("data-rellax-horizontal-speed"),
              h = a.getAttribute("data-rellax-vertical-scroll-axis"),
              k = a.getAttribute("data-rellax-horizontal-scroll-axis"),
              l = a.getAttribute("data-rellax-zindex") ||
              0,
              n = a.getAttribute("data-rellax-min"),
              p = a.getAttribute("data-rellax-max"),
              q = a.getAttribute("data-rellax-min-x"),
              t = a.getAttribute("data-rellax-max-x"),
              x = a.getAttribute("data-rellax-min-y"),
              A = a.getAttribute("data-rellax-max-y"),
              z = b.options.wrapper ? b.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            b.options.relativeToWrapper && (z = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - b.options.wrapper.offsetTop);
            var m =
              b.options.vertical ? d || b.options.center ? z : 0 : 0,
              r = b.options.horizontal ? d || b.options.center ? b.options.wrapper ? b.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
            z = m + a.getBoundingClientRect().top;
            var E = a.clientHeight || a.offsetHeight || a.scrollHeight,
              F = r + a.getBoundingClientRect().left,
              G = a.clientWidth || a.offsetWidth || a.scrollWidth;
            m = d ? d : (m - z + u) / (E + u);
            d = d ? d : (r - F + v) / (G + v);
            b.options.center && (m = d = .5);
            e = e ? e : b.options.speed;
            y = y ? y : b.options.verticalSpeed;
            g = g ? g : b.options.horizontalSpeed;
            h = h ? h : b.options.verticalScrollAxis;
            k = k ? k : b.options.horizontalScrollAxis;
            m = H(d, m, e, y, g);
            a = a.style.cssText;
            d = "";
            if (r = /transform\s*:/i.exec(a)) d = a.slice(r.index), d = (r = d.indexOf(";")) ? " " + d.slice(11, r).replace(/\s/g, "") : " " + d.slice(11).replace(/\s/g, "");
            c.push({
              baseX: m.x,
              baseY: m.y,
              top: z,
              left: F,
              height: E,
              width: G,
              speed: e,
              verticalSpeed: y,
              horizontalSpeed: g,
              verticalScrollAxis: h,
              horizontalScrollAxis: k,
              style: a,
              transform: d,
              zindex: l,
              min: n,
              max: p,
              minX: q,
              maxX: t,
              minY: x,
              maxY: A
            })
          }
          I();
          w && (window.addEventListener("resize", B), w = !1, C())
        },
        D = function () {
          var c = l,
            a = n;
          l = b.options.wrapper ? b.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
          n = b.options.wrapper ? b.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
          b.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) -
            b.options.wrapper.offsetTop);
          return c != l && b.options.vertical || a != n && b.options.horizontal ? !0 : !1
        },
        H = function (c, a, d, e, g) {
          var f = {};
          c = 100 * (g ? g : d) * (1 - c);
          a = 100 * (e ? e : d) * (1 - a);
          f.x = b.options.round ? Math.round(c) : Math.round(100 * c) / 100;
          f.y = b.options.round ? Math.round(a) : Math.round(100 * a) / 100;
          return f
        },
        h = function () {
          window.removeEventListener("resize", h);
          window.removeEventListener("orientationchange", h);
          (b.options.wrapper ? b.options.wrapper : window).removeEventListener("scroll", h);
          (b.options.wrapper ? b.options.wrapper :
            document).removeEventListener("touchmove", h);
          p = A(C)
        },
        C = function () {
          D() && !1 === w ? (I(), p = A(C)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (b.options.wrapper ? b.options.wrapper : window).addEventListener("scroll", h, x ? {
            passive: !0
          } : !1), (b.options.wrapper ? b.options.wrapper : document).addEventListener("touchmove", h, x ? {
            passive: !0
          } : !1))
        },
        I = function () {
          for (var f, a = 0; a < b.elems.length; a++) {
            var d = c[a].verticalScrollAxis.toLowerCase(),
              e = c[a].horizontalScrollAxis.toLowerCase();
            f = -1 != d.indexOf("x") ? l : 0;
            d = -1 != d.indexOf("y") ? l : 0;
            var g = -1 != e.indexOf("x") ? n : 0;
            e = -1 != e.indexOf("y") ? n : 0;
            f = H((f + g - c[a].left + v) / (c[a].width + v), (d + e - c[a].top + u) / (c[a].height + u), c[a].speed, c[a].verticalSpeed, c[a].horizontalSpeed);
            e = f.y - c[a].baseY;
            d = f.x - c[a].baseX;
            null !== c[a].min && (b.options.vertical && !b.options.horizontal && (e = e <= c[a].min ? c[a].min : e), b.options.horizontal && !b.options.vertical && (d = d <= c[a].min ? c[a].min : d));
            null != c[a].minY && (e = e <= c[a].minY ? c[a].minY : e);
            null != c[a].minX && (d = d <= c[a].minX ? c[a].minX :
              d);
            null !== c[a].max && (b.options.vertical && !b.options.horizontal && (e = e >= c[a].max ? c[a].max : e), b.options.horizontal && !b.options.vertical && (d = d >= c[a].max ? c[a].max : d));
            null != c[a].maxY && (e = e >= c[a].maxY ? c[a].maxY : e);
            null != c[a].maxX && (d = d >= c[a].maxX ? c[a].maxX : d);
            b.elems[a].style[K] = "translate3d(" + (b.options.horizontal ? d : "0") + "px," + (b.options.vertical ? e : "0") + "px," + c[a].zindex + "px) " + c[a].transform
          }
          b.options.callback(f)
        };
      b.destroy = function () {
        for (var f = 0; f < b.elems.length; f++) b.elems[f].style.cssText = c[f].style;
        w || (window.removeEventListener("resize", B), w = !0);
        J(p);
        p = null
      };
      B();
      b.refresh = B;
      return b
    }
    console.warn("Rellax: The elements you're trying to select don't exist.")
  };
  return q
});