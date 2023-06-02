// example
import {add, err, promiseTest} from "./index";

import { expect, test} from '@jest/globals';

test('toBe',()=>{
    expect(add(1,2)).toBe(3)
} )

test('toThrow', ()=>{
    expect(()=> err().toThrow('An Error was found'))
})

test("oldPromiseTest",()=>{
    promiseTest(1,2)
        .then(data=>{
            expect(data).toBe('+ve')
        }).catch(e=>{
            expect(e).toBe('-ve')
    })
})

test("newPromiseTest",()=>{
    expect(promiseTest(2,1)).resolves.toBe('+ve')
})

