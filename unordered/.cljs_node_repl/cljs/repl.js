// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9210_9224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9211_9225 = null;
var count__9212_9226 = (0);
var i__9213_9227 = (0);
while(true){
if((i__9213_9227 < count__9212_9226)){
var f_9228 = cljs.core._nth.call(null,chunk__9211_9225,i__9213_9227);
cljs.core.println.call(null,"  ",f_9228);

var G__9229 = seq__9210_9224;
var G__9230 = chunk__9211_9225;
var G__9231 = count__9212_9226;
var G__9232 = (i__9213_9227 + (1));
seq__9210_9224 = G__9229;
chunk__9211_9225 = G__9230;
count__9212_9226 = G__9231;
i__9213_9227 = G__9232;
continue;
} else {
var temp__4425__auto___9233 = cljs.core.seq.call(null,seq__9210_9224);
if(temp__4425__auto___9233){
var seq__9210_9234__$1 = temp__4425__auto___9233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9210_9234__$1)){
var c__7000__auto___9235 = cljs.core.chunk_first.call(null,seq__9210_9234__$1);
var G__9236 = cljs.core.chunk_rest.call(null,seq__9210_9234__$1);
var G__9237 = c__7000__auto___9235;
var G__9238 = cljs.core.count.call(null,c__7000__auto___9235);
var G__9239 = (0);
seq__9210_9224 = G__9236;
chunk__9211_9225 = G__9237;
count__9212_9226 = G__9238;
i__9213_9227 = G__9239;
continue;
} else {
var f_9240 = cljs.core.first.call(null,seq__9210_9234__$1);
cljs.core.println.call(null,"  ",f_9240);

var G__9241 = cljs.core.next.call(null,seq__9210_9234__$1);
var G__9242 = null;
var G__9243 = (0);
var G__9244 = (0);
seq__9210_9224 = G__9241;
chunk__9211_9225 = G__9242;
count__9212_9226 = G__9243;
i__9213_9227 = G__9244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9245 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6197__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6197__auto__)){
return or__6197__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9245);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9245)))?cljs.core.second.call(null,arglists_9245):arglists_9245));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9214 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9215 = null;
var count__9216 = (0);
var i__9217 = (0);
while(true){
if((i__9217 < count__9216)){
var vec__9218 = cljs.core._nth.call(null,chunk__9215,i__9217);
var name = cljs.core.nth.call(null,vec__9218,(0),null);
var map__9219 = cljs.core.nth.call(null,vec__9218,(1),null);
var map__9219__$1 = ((((!((map__9219 == null)))?((((map__9219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9219):map__9219);
var doc = cljs.core.get.call(null,map__9219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9246 = seq__9214;
var G__9247 = chunk__9215;
var G__9248 = count__9216;
var G__9249 = (i__9217 + (1));
seq__9214 = G__9246;
chunk__9215 = G__9247;
count__9216 = G__9248;
i__9217 = G__9249;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9214);
if(temp__4425__auto__){
var seq__9214__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9214__$1)){
var c__7000__auto__ = cljs.core.chunk_first.call(null,seq__9214__$1);
var G__9250 = cljs.core.chunk_rest.call(null,seq__9214__$1);
var G__9251 = c__7000__auto__;
var G__9252 = cljs.core.count.call(null,c__7000__auto__);
var G__9253 = (0);
seq__9214 = G__9250;
chunk__9215 = G__9251;
count__9216 = G__9252;
i__9217 = G__9253;
continue;
} else {
var vec__9221 = cljs.core.first.call(null,seq__9214__$1);
var name = cljs.core.nth.call(null,vec__9221,(0),null);
var map__9222 = cljs.core.nth.call(null,vec__9221,(1),null);
var map__9222__$1 = ((((!((map__9222 == null)))?((((map__9222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9222):map__9222);
var doc = cljs.core.get.call(null,map__9222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9254 = cljs.core.next.call(null,seq__9214__$1);
var G__9255 = null;
var G__9256 = (0);
var G__9257 = (0);
seq__9214 = G__9254;
chunk__9215 = G__9255;
count__9216 = G__9256;
i__9217 = G__9257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map