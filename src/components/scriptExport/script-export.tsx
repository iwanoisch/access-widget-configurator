import {useGlobalContext} from "../../hooks/global-provider.tsx";
import {Button, useToast, CardBody, Card, Code} from "@chakra-ui/react";

export const ScriptExport = () => {
    const { config } = useGlobalContext()
    const toast = useToast()

    const scriptContent = `<script>
  (function(){
    var s = document.createElement('script'),
    e = !document.body ? document.querySelector('head') :
    document.body;
    s.src = 'https://eu.acsbapp.com/apps/app/dist/js/app.js';
    s.async = true;
    s.onload = function(){
      acsbJS.init({
        statementLink : '',
        footerHtml : '<a href="https://www.accessiway.com/" target="_blank">AccessiWay. The Web Accessibility Solution</a>',
        hideMobile : false,
        hideTrigger : false,
        language : '${config.language}',
        position : '${config.position}',
        leadColor : '${config.color}',
        triggerColor : '${config.color}',
        triggerRadius : '50%',
        triggerPositionX : '${config.position}',
        triggerPositionY : '${config.verticalPosition}',
        triggerIcon : 'people',
        triggerSize : '${config.size === 'small' ? 'small' : config.size === 'medium' ? 'medium' : 'big'}',
        triggerOffsetX : 20,
        triggerOffsetY : 20,
        mobile : {
          triggerSize : 'small',
          triggerPositionX : '${config.mobilePosition || 'left'}',
          triggerPositionY : '${config.mobileVerticalPosition || 'center'}',
          triggerOffsetX : 10,
          triggerOffsetY : 10,
          triggerRadius : '50%'
        }
     });
    };
    e.appendChild(s);
  }());
</script>`

    const handleCopy = () => {
        navigator.clipboard.writeText(scriptContent)
        toast({
            title: 'Script copied!',
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    }

    return (
        <Card variant="outline" mt={6}>
            <CardBody>
                <Button
                    colorScheme="brand"
                    onClick={handleCopy}
                    mb={4}
                >
                    Copy Script
                </Button>
                <Code display="block" whiteSpace="pre" p={4} overflowX="auto">
                    {scriptContent}
                </Code>
            </CardBody>
        </Card>
    )
};