#!/usr/bin/env node

'use strict';
const got = require('got');
 
(async () => {
    try {
        await got('https://dobartek.hr', { method: 'HEAD'});
        console.log("🍕 dobartek.hr is up")
    } catch (error) {
        console.log("💀 dobartek.hr is down")
    }
})();