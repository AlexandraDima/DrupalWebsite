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

/* themes/bootstrap/templates/bootstrap/bootstrap-dropdown.html.twig */
class __TwigTemplate_52ec1c19cb63c7b215ff11ea1442df8ecb4f14c7d742ec699b9947f65c9a42c6 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 17];
        $filters = ["clean_class" => 19, "escape" => 22];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['clean_class', 'escape'],
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
        // line 17
        $context["classes"] = [0 => "btn-group", 1 => ((        // line 19
($context["alignment"] ?? null)) ? (("drop" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["alignment"] ?? null))))) : ("dropdown"))];
        // line 22
        echo "<div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 23
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["toggle"] ?? null)), "html", null, true);
        echo "
  ";
        // line 24
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["items"] ?? null)), "html", null, true);
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/bootstrap/templates/bootstrap/bootstrap-dropdown.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 24,  63 => 23,  58 => 22,  56 => 19,  55 => 17,);
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
 * Default theme implementation to display a Bootstrap Dropdown component.
 *
 * Available variables:
 * - alignment: (optional) The alignment of the dropdown menu.
 * - attributes: An array of HTML attributes intended to be added to the main
 *   container tag of this template.
 * - items: The dropdown menu items.
 * - toggle: The toggle element.
 *
 * @ingroup templates
 */
#}
{%
  set classes = [
    'btn-group',
    alignment ? 'drop' ~ alignment|clean_class : 'dropdown',
  ]
%}
<div{{ attributes.addClass(classes) }}>
  {{ toggle }}
  {{ items }}
</div>
", "themes/bootstrap/templates/bootstrap/bootstrap-dropdown.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\themes\\bootstrap\\templates\\bootstrap\\bootstrap-dropdown.html.twig");
    }
}
