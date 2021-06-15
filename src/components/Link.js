import React from 'react';

const Link=({className, href, children})=>{

    const onAnchorClick=(event)=>{

        if(event.metakey || event.ctrlKey){
            return;
        } //shortcut code ctrl+right click to open the link on new page
        event.preventDefault();
        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    } 
    return(
        <div>
            <a onClick={onAnchorClick} className={className} href={href}>{children}</a>
        </div>
    )
}

export default Link