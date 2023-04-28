import { useState } from "react"

const BookingForm = () => {

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handletime = (e) => {
        setTime(e.target.value)
    }

    const handleguests = (e) => {
        setGuests(e.target.value)
    }

    const handleoccasion = (e) => {
        setOccasion(e.target.value)
    }

    const availableTimes = []

    return (
    <form className="form">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDate} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={handletime}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleguests} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleoccasion}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {availableTimes}
        <input type="submit" value="Make Your reservation" />
    </form>
    )
}

export default BookingForm