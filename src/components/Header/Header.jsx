import profile from '../../assets/image/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-2 bg-slate-100'>
            <h1 className="text-4xl ">Knowledge react cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;