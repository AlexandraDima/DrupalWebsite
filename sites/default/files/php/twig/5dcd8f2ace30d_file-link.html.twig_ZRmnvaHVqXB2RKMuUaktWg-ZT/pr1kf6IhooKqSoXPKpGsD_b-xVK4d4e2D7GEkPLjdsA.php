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

/* themes/bootstrap/templates/file/file-link.html.twig */
class __TwigTemplate_2ad05f705b8278308ce8ed87cfd71935ccb14f737a57de7f7b6e4ec7ce4aaf71 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["spaceless" => 18, "set" => 20, "if" => 26];
        $filters = ["clean_class" => 22, "escape" => 25];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['spaceless', 'set', 'if'],
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
        // line 18
        ob_start();
        // line 19
        echo "  ";
        // line 20
        $context["classes"] = [0 => ((        // line 21
($context["icon_only"] ?? null)) ? ("icon-only") : ("")), 1 => (( !        // line 22
($context["icon_only"] ?? null)) ? (("icon-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["icon_position"] ?? null))))) : (""))];
        // line 25
        echo "  <span";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
    ";
        // line 26
        if (($context["icon_only"] ?? null)) {
            // line 27
            echo "      <span class=\"file-icon\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null)), "html", null, true);
            echo "</span>
      <span class=\"sr-only\">
        <span class=\"file-link\">";
            // line 29
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link"] ?? null)), "html", null, true);
            echo "</span>
        <span class=\"file-size\">";
            // line 30
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["file_size"] ?? null)), "html", null, true);
            echo "</span>
      </span>
    ";
        } else {
            // line 33
            echo "      ";
            if ((($context["icon_position"] ?? null) == "after")) {
                // line 34
                echo "        <span class=\"file-link\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link"] ?? null)), "html", null, true);
                echo "</span><span class=\"file-size\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["file_size"] ?? null)), "html", null, true);
                echo "</span><span class=\"file-icon\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null)), "html", null, true);
                echo "</span>
      ";
            } else {
                // line 36
                echo "        <span class=\"file-icon\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null)), "html", null, true);
                echo "</span><span class=\"file-link\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link"] ?? null)), "html", null, true);
                echo "</span><span class=\"file-size\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["file_size"] ?? null)), "html", null, true);
                echo "</span>
      ";
            }
            // line 38
            echo "    ";
        }
        // line 39
        echo "  </span>
";
        echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
    }

    public function getTemplateName()
    {
        return "themes/bootstrap/templates/file/file-link.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 39,  109 => 38,  99 => 36,  89 => 34,  86 => 33,  80 => 30,  76 => 29,  70 => 27,  68 => 26,  63 => 25,  61 => 22,  60 => 21,  59 => 20,  57 => 19,  55 => 18,);
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
 * Theme override for a link to a file.
 *
 * Available variables:
 * - attributes: The HTML attributes for the containing element.
 * - link: A link to the file.
 * - icon: An icon.
 * - icon_only: Flag to display only the icon and not the label.
 * - icon_position: Where an icon should be displayed.
 *
 * @ingroup templates
 *
 * @see \\Drupal\\bootstrap\\Plugin\\Preprocess\\FileLink::preprocessVariables
 */
#}
{% spaceless %}
  {%
    set classes = [
      icon_only ? 'icon-only',
      not icon_only ? 'icon-' ~ icon_position|clean_class
    ]
  %}
  <span{{ attributes.addClass(classes) }}>
    {% if icon_only %}
      <span class=\"file-icon\">{{ icon }}</span>
      <span class=\"sr-only\">
        <span class=\"file-link\">{{ link }}</span>
        <span class=\"file-size\">{{ file_size }}</span>
      </span>
    {% else %}
      {% if icon_position == 'after' %}
        <span class=\"file-link\">{{ link }}</span><span class=\"file-size\">{{ file_size }}</span><span class=\"file-icon\">{{ icon }}</span>
      {% else %}
        <span class=\"file-icon\">{{ icon }}</span><span class=\"file-link\">{{ link }}</span><span class=\"file-size\">{{ file_size }}</span>
      {% endif %}
    {% endif %}
  </span>
{% endspaceless %}
", "themes/bootstrap/templates/file/file-link.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\themes\\bootstrap\\templates\\file\\file-link.html.twig");
    }
}
