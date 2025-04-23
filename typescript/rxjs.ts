function a(){
    console.log("Hello World");
    return console.log("Hello World 2");
    return console.log("Hello World 3");
    }
    
    let b = a();
    
    let c = a();
    
    import { Observable  } from 'rxjs';
    import { of, from, } from 'rxjs';
    import { Subject , ReplaySubject, BehaviorSubject, AsyncSubject} from 'rxjs';     
    
    let obs = new Observable((subscriber) => {
        console.log("Hello World 4");
        subscriber.next("Hello World 5");
        subscriber.next("Hello World 6");
        setTimeout(() => {     
            console.log("Hello World 7");
            subscriber.next("Hello World 8");
            subscriber.next("Hello World 9");
            subscriber.error("Hello World 10");
             subscriber.complete();
         })
         subscriber.complete();
    });
    
    
    console.log("befor subscribe");
    let subcript = obs.subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error(error),
        complete: () => console.log("Completed")});
    console.log("after subscribe");
    
    console.log(subcript.unsubscribe());
    
    let off = of(1, 2, 3, 4, 5).subscribe((data) => console.log(data));
    
    from([1, 2, 3, 4, 5]).subscribe((data) => console.log(data));
    
    off.unsubscribe();
    
    
    // fromEvent(document, 'click').subscribe((data) => console.log(data));
    
    // let subject = new Subject();
    let rs  = new AsyncSubject() // buffer size 5
    
    rs.subscribe((data) => console.log(data + 'a')); 
    
    
    rs.next(1);
    rs.next(2);
    rs.next(3);
    rs.next(4);
    rs.subscribe((data) => console.log(data + 'new')); 
    rs.next(5);
    rs.complete(); // 5 is the last value emitted to all subscribers
     rs.next(6); // Error: Subject has been completed and is no longer accepting new values.  
    // let streamdata = of(1, 2, 3, 4, 5);
    
    // streamdata.subscribe(rs);