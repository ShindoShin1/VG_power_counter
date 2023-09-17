// 上段
var btn_reset = document.getElementById('btn_reset');
var btn_guard = document.getElementById('btn_guard');
var point_guard = document.getElementById('point_guard');
var btn_else = document.getElementById('btn_else');
var btn_persona = document.getElementById('btn_persona');

// // トリガー
// var btn_star_trigger = document.getElementById('btn_star_trigger');
// var btn_front_trigger = document.getElementById('btn_front_trigger');
// var btn_draw_trigger = document.getElementById('btn_draw_trigger');
// var btn_heal_trigger = document.getElementById('btn_heal_trigger');
// var btn_over_trigger = document.getElementById('btn_over_trigger');
// var point_star_trigger = document.getElementById('point_star_trigger');
// var point_front_trigger = document.getElementById('point_front_trigger');
// var point_draw_trigger = document.getElementById('point_draw_trigger');
// var point_heal_trigger = document.getElementById('point_heal_trigger');
// var point_over_trigger = document.getElementById('point_over_trigger');

// 中段
var btn_front_left = document.getElementById('btn_front_left');
var btn_front_center = document.getElementById('btn_front_center');
var btn_front_right = document.getElementById('btn_front_right');
var point_front_left = document.getElementById('point_front_left');
var point_front_center = document.getElementById('point_front_center');
var point_front_right = document.getElementById('point_front_right');

// 下段
var btn_back_left = document.getElementById('btn_back_left');
var btn_back_center = document.getElementById('btn_back_center');
var btn_back_right = document.getElementById('btn_back_right');
var point_back_left = document.getElementById('point_back_left');
var point_back_center = document.getElementById('point_back_center');
var point_back_right = document.getElementById('point_back_right');

// 加算値
var adder = {
    fix : false,
    power : 5000,
}
var add_point_p2000 = document.getElementById('add_point_p2000');
var add_point_p5000 = document.getElementById('add_point_p5000');
var add_point_p10000 = document.getElementById('add_point_p10000');
var add_point_p100million = document.getElementById('add_point_p100million');
var add_point_m2000 = document.getElementById('add_point_m2000');
var add_point_m5000 = document.getElementById('add_point_m5000');
var add_point_m10000 = document.getElementById('add_point_m10000');
var add_point_f1 = document.getElementById('add_point_f1');
var add_point = document.getElementById('add_point');

// 加算情報
var count = {
    count_guard : 0,
    count_front_left : 0,
    count_front_center : 0,
    count_front_right : 0,
    count_back_left : 0,
    count_back_center : 0,
    count_back_right : 0,
    // count_star_trigger : 0,
    // count_front_trigger : 0,
    // count_draw_trigger : 0,
    // count_heal_trigger : 0,
    // count_over_trigger : 0,
}

function addCount(e){
    if (adder["fix"]) {
        count[this.count] = adder["power"];
    } else {
        count[this.count] = count[this.count] + adder["power"];
    }
    this.counter.innerHTML = count[this.count];
}

// function addTriggerCount(e){
//     count[this.count] = count[this.count] + 1;
//     this.counter.innerHTML = count[this.count];
// }

function resetCount(e){
    var counters = document.getElementsByClassName('point');
    for (let index = 0; index < counters.length; index++) {
        counters[index].innerHTML = 0;
    }
    Object.keys(count).forEach(key => {
        count[key] = 0;
    });
}

function persona_ride(){

    let hold = adder["power"];
    adder["power"] = 10000;
    console.log(adder["power"]);
    console.log(hold);

    let clickEvent = new Event('click');

    btn_front_left.dispatchEvent(clickEvent);
    btn_front_center.dispatchEvent(clickEvent);
    btn_front_right.dispatchEvent(clickEvent);
    adder["power"] = hold;

}

function select_add_point(e){
    adder["fix"] = this.is_fix;
    adder["power"] = this.point;

    add_point.innerHTML = adder["power"];
}

window.addEventListener("load",()=>{
    add_point.innerHTML = adder["power"];

    btn_reset.addEventListener('click',resetCount);

    btn_guard.addEventListener('click',{ 
        count: "count_guard", 
        counter: point_guard,
        handleEvent: addCount,
    });
    
    btn_front_left.addEventListener('click',{ 
        count: "count_front_left", 
        counter: point_front_left,
        handleEvent: addCount,
    });
    
    btn_front_center.addEventListener('click',{ 
        count: "count_front_center", 
        counter: point_front_center,
        handleEvent: addCount,
    });
    
    btn_front_right.addEventListener('click',{ 
        count: "count_front_right", 
        counter: point_front_right,
        handleEvent: addCount,
    });
    
    btn_back_left.addEventListener('click',{ 
        count: "count_back_left", 
        counter: point_back_left,
        handleEvent: addCount,
    });
    
    btn_back_center.addEventListener('click',{ 
        count: "count_back_center", 
        counter: point_back_center,
        handleEvent: addCount,
    });
    
    btn_back_right.addEventListener('click',{ 
        count: "count_back_right", 
        counter: point_back_right,
        handleEvent: addCount,
    });
    
    // btn_star_trigger.addEventListener('click',{ 
    //     count: "count_star_trigger", 
    //     counter: point_star_trigger,
    //     handleEvent: addTriggerCount,
    // });
    
    // btn_front_trigger.addEventListener('click',{ 
    //     count: "count_front_trigger", 
    //     counter: point_front_trigger,
    //     handleEvent: addTriggerCount,
    // });
    
    // btn_draw_trigger.addEventListener('click',{ 
    //     count: "count_draw_trigger", 
    //     counter: point_draw_trigger,
    //     handleEvent: addTriggerCount,
    // });
    
    // btn_heal_trigger.addEventListener('click',{ 
    //     count: "count_heal_trigger", 
    //     counter: point_heal_trigger,
    //     handleEvent: addTriggerCount,
    // });
    
    // btn_over_trigger.addEventListener('click',{ 
    //     count: "count_over_trigger", 
    //     counter: point_over_trigger,
    //     handleEvent: addTriggerCount,
    // });

    btn_persona.addEventListener('click',persona_ride);

    add_point_p2000.addEventListener('click',{ 
        is_fix: false, 
        point: 2000,
        handleEvent: select_add_point,
    });

    add_point_p5000.addEventListener('click',{ 
        is_fix: false, 
        point: 5000,
        handleEvent: select_add_point,
    });
    
    add_point_p10000.addEventListener('click',{ 
        is_fix: false, 
        point: 10000,
        handleEvent: select_add_point,
    });
    
    add_point_p100million.addEventListener('click',{ 
        is_fix: false, 
        point: 1000000000,
        handleEvent: select_add_point,
    });
    
    add_point_m2000.addEventListener('click',{ 
        is_fix: false, 
        point: -2000,
        handleEvent: select_add_point,
    });
    
    add_point_m5000.addEventListener('click',{ 
        is_fix: false, 
        point: -5000,
        handleEvent: select_add_point,
    });
    
    add_point_m10000.addEventListener('click',{ 
        is_fix: false, 
        point: -10000,
        handleEvent: select_add_point,
    });
    
    add_point_f1.addEventListener('click',{ 
        is_fix: true, 
        point: 1,
        handleEvent: select_add_point,
    });
});