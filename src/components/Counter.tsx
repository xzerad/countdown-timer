import { useCountDownTimer } from "../hooks/useCountDownTimer";

export function Counter(values: {seconds: number, hours: number, minutes: number, days: number}){
    values = {...values};
    values.minutes = values.minutes + Math.floor(values.seconds / 60);
    values.seconds = values.seconds % 60;

    values.hours = values.hours + Math.floor(values.minutes / 60);
    values.minutes = values.minutes % 60;

    values.days = values.days + Math.floor(values.hours / 24);
    values.hours = values.hours % 24;


    const counter = useCountDownTimer(values);
    return (
        <div className="counter-container">
            <div className="flex-justified-content-container event-title">
                <p>coming soon</p>
            </div>
            <div className="flex-justified-content-container align-items">
                <div className="counter-item-container">
                    <div className="counter-item">{counter.days}</div>
                    <div>Days</div>
                </div>
                :
                <div className="counter-item-container">
                    <div className="counter-item">{counter.hours.toString().padStart(2, '0')}</div>
                    <div>Hours</div>
                </div>
                :
                <div className="counter-item-container">
                    <div className="counter-item">{counter.minutes.toString().padStart(2, '0')}</div>
                    <div>Minutes</div>
                </div>
                :
                <div className="counter-item-container">
                    <div className="counter-item">{counter.seconds.toString().padStart(2, '0')}</div>
                    <div>Seconds</div>
                </div>
            </div>

        </div>
    )
}