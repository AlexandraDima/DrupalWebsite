<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/system/templates/time.html.twig */
class __TwigTemplate_2af86c2f0df090d5979371b43756c2d4de9a4ef0e113c15c59e6192a1f120886 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 22];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 22
        echo "<time";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null)), "html", null, true);
        echo ">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["text"] ?? null)), "html", null, true);
        echo "</time>
";
    }

    public function getTemplateName()
    {
        return "core/modules/system/templates/time.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 22,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation for a date / time element.
 *
 * Available variables
 * - timestamp: (optional) A UNIX timestamp for the datetime attribute. If the
 *   datetime cannot be represented as a UNIX timestamp, use a valid datetime
 *   attribute value in attributes.datetime.
 * - text: (optional) The content to display within the <time> element.
 *   Defaults to a human-readable representation of the timestamp value or the
 *   datetime attribute value using DateFormatter::format().
 * - attributes: (optional) HTML attributes to apply to the <time> element.
 *   A datetime attribute in 'attributes' overrides the 'timestamp'. To
 *   create a valid datetime attribute value from a UNIX timestamp, use
 *   DateFormatter::format() with one of the predefined 'html_*' formats.
 *
 * @see template_preprocess_time()
 * @see http://www.w3.org/TR/html5-author/the-time-element.html#attr-time-datetime
 */
#}
<time{{ attributes }}>{{ text }}</time>
", "core/modules/system/templates/time.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\core\\modules\\system\\templates\\time.html.twig");
    }
}
