const MissionUtils = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { readBridgeSize, readMoving } = require("./InputView");
const bridgeGame = require("./BridgeGame");
const { printMap } = require("./OutputView");

const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.size = 0;
    this.randomBridge = [];
    this.userMove = '';
  }
  play() {
    Consolee.print("다리 건너기 게임을 시작합니다.");
    this.settingGame();
  }
  settingGame(){
    this.size = readBridgeSize();
    for(let i = 0; i < size; i++){
      this.randomBridge[i] = generate();
    }
    bridgeGame.bridge = makeBridge(this.size, this.randomBridge);
    this.startGame();
  }
  startGame(){
    let num = this.size;
    let i = 0;
    let ok = true;
    while(ok == true){
      ok = this.readMove(i);
      if(ok == false) break;
      i += 1;
    }
    //this.checkResetOrFinish(ok);
  }
  readMove(num){
    this.userMove = readMoving();
    let moveCheck = bridgeGame.move(this.userMove, num);
    printMap(bridgeGame.check);
    return moveCheck;
  }
  // checkResetOrFinish(){

  // }
}

module.exports = App;
