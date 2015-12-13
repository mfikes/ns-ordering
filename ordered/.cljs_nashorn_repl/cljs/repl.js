// Compiled by ClojureScript 1.7.170 {}
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
var seq__9377_9391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9378_9392 = null;
var count__9379_9393 = (0);
var i__9380_9394 = (0);
while(true){
if((i__9380_9394 < count__9379_9393)){
var f_9395 = cljs.core._nth.call(null,chunk__9378_9392,i__9380_9394);
cljs.core.println.call(null,"  ",f_9395);

var G__9396 = seq__9377_9391;
var G__9397 = chunk__9378_9392;
var G__9398 = count__9379_9393;
var G__9399 = (i__9380_9394 + (1));
seq__9377_9391 = G__9396;
chunk__9378_9392 = G__9397;
count__9379_9393 = G__9398;
i__9380_9394 = G__9399;
continue;
} else {
var temp__4425__auto___9400 = cljs.core.seq.call(null,seq__9377_9391);
if(temp__4425__auto___9400){
var seq__9377_9401__$1 = temp__4425__auto___9400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9377_9401__$1)){
var c__7167__auto___9402 = cljs.core.chunk_first.call(null,seq__9377_9401__$1);
var G__9403 = cljs.core.chunk_rest.call(null,seq__9377_9401__$1);
var G__9404 = c__7167__auto___9402;
var G__9405 = cljs.core.count.call(null,c__7167__auto___9402);
var G__9406 = (0);
seq__9377_9391 = G__9403;
chunk__9378_9392 = G__9404;
count__9379_9393 = G__9405;
i__9380_9394 = G__9406;
continue;
} else {
var f_9407 = cljs.core.first.call(null,seq__9377_9401__$1);
cljs.core.println.call(null,"  ",f_9407);

var G__9408 = cljs.core.next.call(null,seq__9377_9401__$1);
var G__9409 = null;
var G__9410 = (0);
var G__9411 = (0);
seq__9377_9391 = G__9408;
chunk__9378_9392 = G__9409;
count__9379_9393 = G__9410;
i__9380_9394 = G__9411;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9412 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6364__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6364__auto__)){
return or__6364__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9412);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9412)))?cljs.core.second.call(null,arglists_9412):arglists_9412));
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
var seq__9381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9382 = null;
var count__9383 = (0);
var i__9384 = (0);
while(true){
if((i__9384 < count__9383)){
var vec__9385 = cljs.core._nth.call(null,chunk__9382,i__9384);
var name = cljs.core.nth.call(null,vec__9385,(0),null);
var map__9386 = cljs.core.nth.call(null,vec__9385,(1),null);
var map__9386__$1 = ((((!((map__9386 == null)))?((((map__9386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9386):map__9386);
var doc = cljs.core.get.call(null,map__9386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9413 = seq__9381;
var G__9414 = chunk__9382;
var G__9415 = count__9383;
var G__9416 = (i__9384 + (1));
seq__9381 = G__9413;
chunk__9382 = G__9414;
count__9383 = G__9415;
i__9384 = G__9416;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9381);
if(temp__4425__auto__){
var seq__9381__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9381__$1)){
var c__7167__auto__ = cljs.core.chunk_first.call(null,seq__9381__$1);
var G__9417 = cljs.core.chunk_rest.call(null,seq__9381__$1);
var G__9418 = c__7167__auto__;
var G__9419 = cljs.core.count.call(null,c__7167__auto__);
var G__9420 = (0);
seq__9381 = G__9417;
chunk__9382 = G__9418;
count__9383 = G__9419;
i__9384 = G__9420;
continue;
} else {
var vec__9388 = cljs.core.first.call(null,seq__9381__$1);
var name = cljs.core.nth.call(null,vec__9388,(0),null);
var map__9389 = cljs.core.nth.call(null,vec__9388,(1),null);
var map__9389__$1 = ((((!((map__9389 == null)))?((((map__9389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9389):map__9389);
var doc = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9421 = cljs.core.next.call(null,seq__9381__$1);
var G__9422 = null;
var G__9423 = (0);
var G__9424 = (0);
seq__9381 = G__9421;
chunk__9382 = G__9422;
count__9383 = G__9423;
i__9384 = G__9424;
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