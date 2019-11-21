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

/* modules/views_slideshow/templates/views-slideshow-slide-counter.html.twig */
class __TwigTemplate_c370bae7349585b074cdb3947917c6bc275899356de67d9e08ae940f165e3732 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 16, "t" => 17];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 't'],
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
        // line 16
        echo "<div id=\"views_slideshow_slide_counter_";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["vss_id"] ?? null)), "html", null, true);
        echo "\" ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  <span class=\"num\">1</span> ";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("of"));
        echo " <span class=\"total\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["slide_count"] ?? null)), "html", null, true);
        echo "</span>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/views_slideshow/templates/views-slideshow-slide-counter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  62 => 17,  55 => 16,);
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
 * Default theme implementation for a views slideshow slide counter.
 *
 * Available variables:
 * - classes: Classes to apply to the counter's div element.
 * - slide_count: Total number of slides.
 * - vss_id: The slideshow's id.
 *
 * @see template_preprocess_views_slideshow_slide_counter()
 *
 * @ingroup vss_templates
 */
#}
<div id=\"views_slideshow_slide_counter_{{ vss_id }}\" {{ attributes.addClass(classes) }}>
  <span class=\"num\">1</span> {{ 'of'|t }} <span class=\"total\">{{ slide_count }}</span>
</div>
", "modules/views_slideshow/templates/views-slideshow-slide-counter.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\modules\\views_slideshow\\templates\\views-slideshow-slide-counter.html.twig");
    }
}
