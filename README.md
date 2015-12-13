# ns-ordering
Explore ns ordering in Clojure and ClojureScript

# Background

Checks to emperically see if Clojure and ClojureScript (regular and bootstrapped), preserve order in `ns` forms.

This test inolves a linear chain of namespaces, each of which depends on the previous, along with a top-level namespace that
has an `ns` form that loads things in the order of the chain.

There is an `unordered` directory containing the code but without the needed `:require` specs to specify the namespace dependencies (which would establish the correct dependency partial order so that the compiler can form a topoligical sort). 

There is also an `ordered` directory which does contain the needed `:require` specs. Additionally, the top-level namespace loads things in a random order, thus forcing the compiler to properly make a correct topological sort.

# Using

## Choose directory

First go into either the `unordered` or the `ordered` directory.

## Set up a REPL

Set up the REPL of your choice. Here are some examples.

### Clojure

`lein repl`

### ClojureScript

Set up Nashorn by starting `lein repl` and then these three forms.

```clojure
(require '[cljs.repl :as repl])
(require '[cljs.repl.nashorn :as nashorn])
(repl/repl (nashorn/repl-env) :repl-verbose true)
```

### Bootstrapped ClojureScript

Use Planck (`brew install planck` if you don't already have it).

```
planck -c src -v
```

## Load

Load the top level namespace.

```
(require 'dep.top)
```

If things work out, check that `dep.z/z` has the contents of `dep.a/a`.

```
dep.z/z
```
