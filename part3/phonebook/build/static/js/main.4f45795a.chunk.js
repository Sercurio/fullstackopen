;(this.webpackJsonpphonebook = this.webpackJsonpphonebook || []).push([
  [0],
  {
    39: function (e, n, t) {
      'use strict'
      t.r(n)
      var o = t(15),
        r = t.n(o),
        c = t(6),
        a = t(3),
        i = t(2),
        s = t(0),
        u = function (e) {
          var n = e.persons,
            t = (e.setPersons, e.serviceHandler),
            o = Object(i.useState)(''),
            r = Object(a.a)(o, 2),
            c = r[0],
            u = r[1],
            d = Object(i.useState)(''),
            l = Object(a.a)(d, 2),
            j = l[0],
            b = l[1]
          return Object(s.jsx)('div', {
            children: Object(s.jsxs)('form', {
              onSubmit: function (e) {
                e.preventDefault()
                var o = { name: c, number: j }
                if (
                  n.some(function (e) {
                    return e.name.toLowerCase() === c.toLowerCase()
                  })
                ) {
                  if (
                    window.confirm(
                      ''.concat(
                        c,
                        ' already exist in the phonebook. Replace the old number with a new one?',
                      ),
                    )
                  ) {
                    var r = n.find(function (e) {
                      return e.name.toLowerCase() === c.toLowerCase()
                    })
                    t.onUpdatedPersonHandler(r.id, o)
                  }
                } else t.onAddedPersonHandler(o)
                u(''), b('')
              },
              children: [
                Object(s.jsxs)('div', {
                  children: [
                    'name: ',
                    Object(s.jsx)('input', {
                      value: c,
                      onChange: function (e) {
                        u(e.target.value)
                      },
                    }),
                  ],
                }),
                Object(s.jsxs)('div', {
                  children: [
                    'number: ',
                    Object(s.jsx)('input', {
                      value: j,
                      onChange: function (e) {
                        b(e.target.value)
                      },
                    }),
                  ],
                }),
                Object(s.jsx)('div', {
                  children: Object(s.jsx)('button', {
                    type: 'submit',
                    children: 'add',
                  }),
                }),
              ],
            }),
          })
        },
        d = function (e) {
          var n = e.person
          return Object(s.jsxs)('li', { children: [n.name, ' ', n.number] })
        },
        l = function (e) {
          var n = e.persons,
            t = e.serviceHandler
          return Object(s.jsx)('ul', {
            children: n.map(function (e) {
              return Object(s.jsxs)(
                'div',
                {
                  children: [
                    Object(s.jsx)(d, { person: e }),
                    Object(s.jsx)('button', {
                      onClick: function () {
                        return t.onDeletedPersonHandler(e)
                      },
                      children: 'Delete',
                    }),
                  ],
                },
                e.name,
              )
            }),
          })
        },
        j = function (e) {
          var n = e.persons,
            t = e.setPersonsToShow
          return Object(s.jsxs)('div', {
            children: [
              'filter shown with: ',
              Object(s.jsx)('input', {
                onChange: function (e) {
                  var o = e.target.value
                  t(
                    '' === o
                      ? n
                      : n.filter(function (e) {
                          return (
                            !0 ===
                            e.name.toLowerCase().startsWith(o.toLowerCase())
                          )
                        }),
                  )
                },
              }),
            ],
          })
        },
        b = function (e) {
          var n = e.message
          return null === n
            ? null
            : n.startsWith('SUCCESS')
            ? Object(s.jsx)('div', {
                style: {
                  color: 'green',
                  background: 'lightgrey',
                  fontSize: '20px',
                  borderStyle: 'solid',
                  borderRadius: '5px',
                  padding: '10px',
                  marginBottom: '10px',
                  display: 'inline-block',
                },
                children: n,
              })
            : n.startsWith('ERROR')
            ? Object(s.jsx)('div', {
                style: {
                  color: 'red',
                  background: 'lightgrey',
                  fontSize: '20px',
                  borderStyle: 'solid',
                  borderRadius: '5px',
                  padding: '10px',
                  marginBottom: '10px',
                  display: 'inline-block',
                },
                children: n,
              })
            : void 0
        },
        f = t(4),
        h = t.n(f),
        p = '/api/persons',
        m = {
          getAll: function () {
            return h.a.get(p).then(function (e) {
              return e.data
            })
          },
          create: function (e) {
            return h.a.post(p, e).then(function (e) {
              return e.data
            })
          },
          update: function (e, n) {
            return h.a.put(''.concat(p, '/').concat(e), n).then(function (e) {
              return e.data
            })
          },
          deletePerson: function (e) {
            return h.a.delete(''.concat(p, '/').concat(e)).then(function (e) {
              return e.data
            })
          },
        },
        O = function () {
          var e = Object(i.useState)([]),
            n = Object(a.a)(e, 2),
            t = n[0],
            o = n[1],
            r = Object(i.useState)([]),
            d = Object(a.a)(r, 2),
            f = d[0],
            h = d[1],
            p = Object(i.useState)(null),
            O = Object(a.a)(p, 2),
            x = O[0],
            v = O[1]
          Object(i.useEffect)(function () {
            m.getAll().then(function (e) {
              o(e), h(e)
            })
          }, [])
          var g = {
            onDeletedPersonHandler: function (e) {
              window.confirm(
                'Are you sure you want to remove '.concat(e.name, '?'),
              ) &&
                m
                  .deletePerson(e.id)
                  .then(function (n) {
                    o(
                      t.filter(function (n) {
                        return n.id !== e.id
                      }),
                    ),
                      v('SUCCESS '.concat(e.name, ' deleted !')),
                      setTimeout(function () {
                        v(null)
                      }, 5e3)
                  })
                  .catch(function (e) {
                    console.log(e)
                  })
            },
            onAddedPersonHandler: function (e) {
              m.create(e)
                .then(function (n) {
                  o(t.concat(n)),
                    v('SUCCESS '.concat(e.name, ' added !')),
                    setTimeout(function () {
                      v(null)
                    }, 5e3)
                })
                .catch(function (n) {
                  v(
                    'ERROR when adding '
                      .concat(e.name, ', ')
                      .concat(n.response.data.error),
                  ),
                    setTimeout(function () {
                      v(null)
                    }, 5e3)
                })
            },
            onUpdatedPersonHandler: function (e, n) {
              m.update(e, n)
                .then(function (r) {
                  var a = t.map(function (t) {
                    return t.id === e
                      ? Object(c.a)(
                          Object(c.a)({}, t),
                          {},
                          { number: n.number },
                        )
                      : t
                  })
                  o(a),
                    v('SUCCESS '.concat(n.name, ' updated !')),
                    setTimeout(function () {
                      v(null)
                    }, 5e3)
                })
                .catch(function (e) {
                  v(
                    'ERROR when updating '
                      .concat(n.name, ', ')
                      .concat(e.response.data.error),
                  ),
                    setTimeout(function () {
                      v(null)
                    }, 5e3),
                    m.getAll().then(function (e) {
                      o(e), h(e)
                    })
                })
            },
          }
          return Object(s.jsxs)('div', {
            children: [
              Object(s.jsx)('h2', { children: 'Phonebook' }),
              Object(s.jsx)(b, { message: x }),
              Object(s.jsx)(j, {
                persons: t,
                setPersonsToShow: h,
                setPersons: o,
              }),
              Object(s.jsx)('h2', { children: 'Add a new' }),
              Object(s.jsx)(u, {
                persons: t,
                setPersons: o,
                serviceHandler: g,
              }),
              Object(s.jsx)('h2', { children: 'Numbers' }),
              Object(s.jsx)(l, { persons: f, serviceHandler: g }),
            ],
          })
        }
      r.a.render(Object(s.jsx)(O, {}), document.getElementById('root'))
    },
  },
  [[39, 1, 2]],
])
//# sourceMappingURL=main.4f45795a.chunk.js.map
