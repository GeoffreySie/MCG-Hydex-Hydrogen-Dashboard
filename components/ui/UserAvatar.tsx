import { FaUser } from 'react-icons/fa';

const UserAvatar = () => {
    return (
        <div className="h-7 w-7 flex-shrink-0 rounded-full flex items-center justify-center bg-gray-200">
            <FaUser size={20} />
        </div>
    );
};

export default UserAvatar;