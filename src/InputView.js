const MissionUtils = require("@woowacourse/mission-utils");
const { bridgeSizeValidate, movingValidate, gameCommandValidate } = require("./ValidateCheck");
const Consolee = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let sizes;
    Consolee.readLine("다리의 길이를 입력해주세요. \n", (size) => {
      try{
        bridgeSizeValidate(size);
      }catch(err){
        return InputView.readBridgeSize();
      }
      sizes = Number(size);
    });
    return sizes;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving() {
    let move;
    Consolee.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D) \n", (moves) => {
      try{
        movingValidate(moves);
      }catch(err){
        return InputView.readMoving();
      }
      move = moves;
    });
    return move;
  },

};

module.exports = InputView;
