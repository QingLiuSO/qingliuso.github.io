(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["home"], {
        "00d3": function (t, e, a) {
            "use strict";
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-pagination", {
                        attrs: {
                            align: t.align,
                            "total-rows": t.total,
                            "per-page": t.pageSize
                        },
                        model: {
                            value: t.page,
                            callback: function (e) {
                                t.page = e
                            },
                            expression: "page"
                        }
                    })
                },
                r = [],
                s = (a("c5f6"), a("d4ec")),
                o = a("bee2"),
                i = a("99de"),
                c = a("7e84"),
                l = a("262e"),
                u = a("9ab4"),
                p = a("60a3"),
                g = function (t) {
                    function e() {
                        var t;
                        return Object(s["a"])(this, e), t = Object(i["a"])(this, Object(c["a"])(e).apply(this, arguments)), t.page = t.currentPage || 0, t
                    }
                    return Object(l["a"])(e, t), Object(o["a"])(e, [{
                        key: "onCurrentPageChanged",
                        value: function (t) {
                            this.$emit("current-change", t)
                        }
                    }]), e
                }(p["c"]);
            u["a"]([Object(p["b"])({
                type: Number,
                default: 0
            })], g.prototype, "currentPage", void 0), u["a"]([Object(p["b"])({
                type: Number,
                default: 0
            })], g.prototype, "total", void 0), u["a"]([Object(p["b"])({
                type: Number,
                default: 0
            })], g.prototype, "pageSize", void 0), u["a"]([Object(p["b"])({
                type: String,
                default: "left"
            })], g.prototype, "align", void 0), u["a"]([Object(p["d"])("page")], g.prototype, "onCurrentPageChanged", null), g = u["a"]([Object(p["a"])({
                name: "Pagination"
            })], g);
            var f = g,
                m = f,
                b = a("2877"),
                d = Object(b["a"])(m, n, r, !1, null, null, null);
            d.options.__file = "Pagination.vue";
            e["a"] = d.exports
        },
        eea6: function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "blog-home"
                    }, [a("h3", {
                        staticClass: "pb-3 mb-4 font-italic border-bottom"
                    }, [a("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [a("b-btn", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 !== t.page,
                            expression: "page !== 1"
                        }],
                        staticClass: "mr-2",
                        attrs: {
                            variant: "light"
                        },
                        on: {
                            click: function (e) {
                                t.onPage(1)
                            }
                        }
                    }, [a("fa-icon", {
                        staticClass: "mr-2",
                        attrs: {
                            icon: "angle-left"
                        }
                    })], 1)], 1), a("span", {
                        staticClass: "align-middle"
                    }, [t._v("Bungo Stray Dogs")])], 1), a("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.posts.length ? a("Gallery", {
                        staticClass: "blog-archives",
                        attrs: {
                            posts: t.posts,
                            format: t.format
                        }
                    }) : a("b-alert", {
                        attrs: {
                            variant: "info"
                        }
                    }, [t._v(t._s(t.$t("no_posts")))])], 1), t.shouldPagination ? a("Pagination", {
                        attrs: {
                            total: t.pagination.total,
                            "page-size": t.pagination.pageSize,
                            "current-page": t.page
                        },
                        on: {
                            "current-change": t.onPage
                        }
                    }) : t._e()], 1)
                },
                r = [],
                s = (a("96cf"), a("1da1")),
                o = a("d4ec"),
                i = a("bee2"),
                c = a("99de"),
                l = a("7e84"),
                u = a("262e"),
                p = a("9ab4"),
                g = a("60a3"),
                f = a("6011"),
                m = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        ref: "content",
                        staticClass: "blog-home-gallery"
                    }, t._l(t.posts, function (e) {
                        return a("b-card", {
                            key: "blog-post-" + e.slug,
                            staticClass: "blog-post mb-5",
                            attrs: {
                                post: e,
                                format: t.format
                            }
                        }, [a("header", {
                            attrs: {
                                slot: "header"
                            },
                            slot: "header"
                        }, [a("b-link", {
                            staticClass: "text-dark",
                            attrs: {
                                to: {
                                    name: "article",
                                    params: {
                                        slug: e.slug
                                    }
                                }
                            }
                        }, [a("h4", [t._v(t._s(e.title))])]), a("small", {
                            staticClass: "text-muted"
                        }, [a("span", {
                            staticClass: "mr-1"
                        }, [a("fa-icon", {
                            staticClass: "mr-1",
                            attrs: {
                                icon: "calendar"
                            }
                        }), t._v(t._s(t._f("date")(e.date, t.format)))], 1), a("span", {
                            staticClass: "mr-1"
                        }, [a("fa-icon", {
                            staticClass: "mr-1",
                            attrs: {
                                icon: "user-edit"
                            }
                        }), t._v(t._s(e.author || t.site.author))], 1), a("span", {
                            staticClass: "mr-1"
                        }, t._l(e.tags, function (e) {
                            var n = e.name,
                                r = e.slug;
                            return a("b-btn", {
                                key: "tag-" + r,
                                staticClass: "text-muted mb-1 mr-1",
                                attrs: {
                                    size: "sm",
                                    variant: "light",
                                    to: {
                                        name: "related",
                                        query: {
                                            tag: n
                                        }
                                    }
                                }
                            }, [a("fa-icon", {
                                staticClass: "mr-1",
                                attrs: {
                                    icon: "tag"
                                }
                            }), t._v(t._s(n))], 1)
                        }), 1)])], 1), a("Content", {
                            attrs: {
                                content: e.excerpt || e.content
                            }
                        }), a("em", {
                            attrs: {
                                slot: "footer"
                            },
                            slot: "footer"
                        }, [a("small", [a("b-link", {
                            staticClass: "text-muted",
                            attrs: {
                                to: {
                                    name: "article",
                                    params: {
                                        slug: e.slug
                                    }
                                }
                            }
                        }, [t._v(t._s(t.$t("read_more")))])], 1)])], 1)
                    }), 1)
                },
                b = [],
                d = a("35ff"),
                h = a("fc76"),
                v = a("da22"),
                y = function (t) {
                    function e() {
                        return Object(o["a"])(this, e), Object(c["a"])(this, Object(l["a"])(e).apply(this, arguments))
                    }
                    return Object(u["a"])(e, t), Object(i["a"])(e, [{
                        key: "mounted",
                        value: function () {
                            var t = this;
                            this.$nextTick(function () {
                                t.$forceUpdate()
                            })
                        }
                    }, {
                        key: "updated",
                        value: function () {
                            var t = this.$refs.content;
                            this.$nextTick(function () {
                                Object(d["a"])(t), Object(h["a"])(t)
                            })
                        }
                    }]), e
                }(g["c"]);
            p["a"]([Object(g["b"])({
                type: String,
                default: "ll"
            })], y.prototype, "format", void 0), p["a"]([Object(g["b"])({
                default: []
            })], y.prototype, "posts", void 0), y = p["a"]([Object(g["a"])({
                name: "Gallery",
                components: {
                    Content: v["a"]
                }
            })], y);
            var O = y,
                j = O,
                _ = (a("b91d"), a("2877")),
                C = Object(_["a"])(j, m, b, !1, null, null, null);
            C.options.__file = "Gallery.vue";
            var k = C.exports,
                w = a("00d3"),
                x = function (t) {
                    function e() {
                        return Object(o["a"])(this, e), Object(c["a"])(this, Object(l["a"])(e).apply(this, arguments))
                    }
                    return Object(u["a"])(e, t), Object(i["a"])(e, [{
                        key: "fetch",
                        value: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                                var a, n;
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (a = e.store, n = a.state.home.page, 1 === n) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 5, a.dispatch("home/".concat(f["d"]), {
                                                page: 1
                                            });
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "onPage",
                        value: function () {
                            var t = Object(s["a"])(regeneratorRuntime.mark(function t(e) {
                                return regeneratorRuntime.wrap(function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (this.page !== e) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return this.$nprogress.start(), t.next = 5, this.$store.dispatch("home/".concat(f["d"]), {
                                                page: e
                                            });
                                        case 5:
                                            window && window.scrollTo(0, 0), this.$nprogress.done();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "format",
                        get: function () {
                            return this.site.format.date_format
                        }
                    }, {
                        key: "page",
                        get: function () {
                            return this.$store.state.home.page
                        }
                    }, {
                        key: "pagination",
                        get: function () {
                            var t = this.$store.state.home.posts,
                                e = t.pageCount,
                                a = t.pageSize,
                                n = t.total;
                            return {
                                pageCount: e,
                                pageSize: a,
                                total: n
                            }
                        }
                    }, {
                        key: "posts",
                        get: function () {
                            return this.$store.state.home.posts.data || []
                        }
                    }, {
                        key: "shouldPagination",
                        get: function () {
                            return this.$store.getters[f["r"]] && this.pagination.pageCount > 1
                        }
                    }]), e
                }(g["c"]);
            x = p["a"]([Object(g["a"])({
                name: "Home",
                components: {
                    Gallery: k,
                    Pagination: w["a"]
                }
            })], x);
            var $ = x,
                P = $,
                S = Object(_["a"])(P, n, r, !1, null, null, null);
            S.options.__file = "home.vue";
            e["default"] = S.exports
        }
    }
]);
