import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { imageUpload } from '../../api/utils';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { AuthContext } from '../../providers/AuthProvider';

const AddRoom = () => {

    const { user } = useContext(AuthContext)

    // date range
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    // handle form submit
    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault()
        const location = event.target.location.value;
        const title = event.target.title.value;

        // date range
        const from = dates.startDate;
        const to = dates.endDate;
        const price = event.target.price.value;
        const total_guest = event.target.total_guest.value;
        const bedrooms = event.target.bedrooms.value;
        const bathrooms = event.target.bathrooms.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const image = event.target.image.files[0];

        // upload image
        imageUpload(image)
            .then(data => {
                // console.log(data);
                const roomData = {
                    location, // this means location: location
                    title,
                    from,
                    to,
                    price: parseFloat(price),
                    total_guest,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data.data.display_url,
                    host: {
                        name: user?.name,
                        image: user?.photoURL,
                        email: user?.email
                    },
                    category
                }
                console.log(roomData);
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false)
            })
    }

    const handleImageChange = image => {
        console.log(image);
        setUploadButtonText(image.name)
    }

    // date range
    const handleDates = ranges => {
        // console.log(ranges.selection);
        setDates(ranges.selection)
    }

    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
                // date range
                dates={dates}
                handleDates={handleDates}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;