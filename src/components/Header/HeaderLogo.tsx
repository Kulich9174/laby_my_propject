import Logo from '../../assets/images/logo_image.svg';

function HeaderLogo (){
    return(
        <>
        <div className='flex justify-between items-center desktop:pr-[10%]'>
                    <a href='#'><img src={Logo} alt='logo' className='min-w-[30px] max-w-56px min-h-[30px] max-h-56px pr-2'/></a> 
                    <div className='text-[#FFFFFF] text-sm pb-0.5 font-bold pt-2'>
                        <p  className='pb-0.5'>Flower</p>
                        <p  className='pb-0.5'>Fracht</p>
                        <p  className='pb-0.5'>Karaganda</p>
                    </div>
                </div>
        </>
    )
}
export default HeaderLogo;