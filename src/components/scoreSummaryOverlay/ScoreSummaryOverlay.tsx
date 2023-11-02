import React from 'react';
import './ScoreSummaryOverlay.scss';
import scoreBadge from '../../assets/png/scoreBadge.png';

function ScoreSummaryOverlay(props) {
  return (
    <div className="summary">
      <div className="summaryContainer">
          <div className="summaryHeader">
              <p className='thisScore'>คะแนนครั้งนี้ : {props.sumScores.toLocaleString()}</p>
              <p className='thisScore'>d' : {(props.dprime).toFixed(1)} ({props.scorePercentile} %)</p>
              {/* <p className='bigScore'>{props.sumScores.toLocaleString()}</p> */}

          </div>
          <div className="summaryBadge">
              <img src={scoreBadge} alt='badge' className={'medalBadge'}></img>
              <p className='highestScore'>อายุ : <b>{props.userAge}</b> ปี</p>
          </div>
          <div className="btnContainerSummary">
              <button className='summaryBtnPlayAgain' onClick={props.refreshPage}>{`เล่นอีกครั้ง`}</button>
              <button className='summaryBtnHome' onClick={props.backToLandingPage}>{`กลับหน้าหลัก`}</button>
          </div>
      </div>
  </div>
  )
}

export default ScoreSummaryOverlay;